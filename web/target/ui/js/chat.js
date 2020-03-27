function formatLocalDateTime(date) {
    return date.year + "-" + date.monthValue + "-" + date.dayOfMonth + " " + date.hour + ":" + date.minute + ":" + date.second;
}

function itemsCounterInitialization() {
	$('.items-counter').prop("hidden", true);
	$('#file-input').on('change', function () {
		var files = this.files;

		if (files.length > 0) {
			$('.items-counter').removeAttr("hidden").text(files.length);
		}
	})
}

function messagesInitialization() {
	$.ajax({
		url: "messages/get",
		type: "GET",
		data: "userId=" + $('#user_id').val(),
		dataType: "json",
		success: function (messageMap) {
			if (messageMap === "No message found") {
				$('.chat-body').css("background-color", "#ddd").append("<div class='empty-chat'>No messages</div>");
				$('#lastMessageDispatchTime').val("2018-01-01 03:00:00")
			} else {
				var html = "";

				$.each(messageMap, function (key, messages) {
                	html += "<div class='messages-date'>" + key + "</div><hr>";

                    $.each(messages, function (key, value){
                        console.log(value);

                        var sender = "my";

                        if (value['senderId'] == $('#user_id').val()) {
                            sender = "friend";
                        }

                        var emailed = "";

                        if (sender === "my" && value['isEmail'] === true) {
                            emailed = "via-email";
                        }

                        var status = "";

                        if (sender === "friend" && $('#status').val() === "online") {
                            status = "<div class='user-online'></div>"
                        }

                        var time = formatLocalDateTime(value['createdAt']);
                        var timeSplit = time.split(' ');
                        var messageTime = timeSplit[1].substr(0, timeSplit[1].lastIndexOf(":"));

                        html += "<div class='message " + sender + " " + emailed + "'><div class='message-owner'>" + status + "</div><div class='message-body'><p>" + value['text'] + "</p><div class='message-time'>" + messageTime + "</div></div></div>";
                        $('#lastMessageDispatchTime').val(formatLocalDateTime(value['createdAt']));
                    });
				});

                $('.chat-body').append(html);
                $('.my > .message-owner').css({
                    'background-image': 'url(\"' + $('#myAvatar').val() + '\")'
                });
                $('.friend > .message-owner').css({
                    'background-image': 'url(\"' + $('#userAvatar').val() + '\")'
                });
            }
		}
	});
}

function websocketInitialization() {
    var href = window.location.href;

    console.log(href.substring(0, href.lastIndexOf("/")));

	var websocket = new WebSocket(href.substring(0, href.lastIndexOf("/")).replace("http", "ws") + "/chat_endpoint");
	var userId = $('#user_id').val();

	websocket.onopen = function () {
		console.log("Server opened");
	};

	websocket.onmessage = function (event) {
		$('.empty-chat').remove();

		var message = JSON.parse(event.data);

		console.log(message);

        var sender = "my";

        if (message['senderId'] === parseInt(userId)) {
            sender = "friend";
        }

        var emailed = "";
        var status = "";

        if (sender === "friend" && $('#status').val() === "online") {
            status = "<div class='user-online'></div>"
        }

        var time = formatLocalDateTime(message['createdAt']);
        var timeSplit = time.split(' ');
        var messageTime = timeSplit[1].substr(0, timeSplit[1].lastIndexOf(":"));

        var lastMessageYmd = new Date($('#lastMessageDispatchTime').val().split(' ')[0]);
        var newMessageYmd = new Date(timeSplit[0]);

        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        var miliDifference = Math.abs(lastMessageYmd.getTime() - newMessageYmd.getTime());
        var html = "";

        if (Math.ceil(miliDifference / (1000 * 3600 * 24)) > 0) {
            html += "<div class='messages-date'>" + newMessageYmd.getDate() + " " + monthNames[newMessageYmd.getMonth()] + " " + newMessageYmd.getFullYear() + "</div><hr>";
        }

        html += "<div class='message " + sender + " " + emailed + "'><div class='message-owner'>" + status + "</div><div class='message-body'><p>" + message['Message_Text'] + "</p><div class='message-time'>" + messageTime + "</div></div></div>";

        $('.chat-body').css('background-color', '#fff').append(html);
        $('.my > .message-owner').css({
            'background-image': 'url(\"' + $('#myAvatar').val() + '\")'
        });
        $('.friend > .message-owner').css({
            'background-image': 'url(\"' + $('#userAvatar').val() + '\")'
        });

        if (sender === "friend") {
            $.ajax({
                url: "messages/read",
                type: "POST",
                data: "userId=" + message['senderId'],
                dataType: "json",
                success: function () {
                }
            })
		}
	};

	websocket.onclose = function () {
		console.log("Server closed");
	};

	$('#message-send').on('click', function () {
	    var status = $('#status').val();

	    console.log(status);

	    if (status === "online") {
            var files = $('#file-input')[0].files;

            if (files.length > 0) {
                var formData = new FormData();

                for (i = 0; i < files.length; i++) {
                    formData.append("file" + i, files[i]);
                }

                $.ajax({
                    url: "files/save",
                    type: "POST",
                    data: formData,
                    contentType: false,
                    processData: false,
                    dataType: "json",
                    success: function (data) {
                        websocket.send(JSON.stringify({
                            id: data,
                            receiverId: $('#user_id').val(),
                            senderId: $('#my_id').val(),
                            text: $('#message-input').val()
                        }));

                        $('#message-input').val("");
                        $('.items-counter').prop("hidden", true).text("0");
                        document.getElementById('file-input').innerText = document.getElementById('file-input').innerText;
                    }
                });
            } else {
                if ($('#message-input').val().length === 0) {
                    $('#modalBody').text("Please, enter the message text");
                    $('#messageModal').modal();
                } else {
                    websocket.send(JSON.stringify({
                        receiverId: $('#user_id').val(),
                        senderId: $('#my_id').val(),
                        text: $('#message-input').val()
                    }));

                    $('#message-input').val("");
                }
            }
        } else {
            formData = new FormData();
            formData.append("receiverId", $("#user_id").val());
            formData.append("text", $('#message-input').val());

            files = $('#file-input')[0].files;

            for (var i = 0; i < files.length; i++) {
                formData.append("files", files[i]);
            }

            $.ajax({
                url: "email/user",
                type: "POST",
                data: formData,
                dataType: "json",
                contentType: false,
                processData: false,
                success: function (message) {
                    $('.empty-chat').remove();

                    var sender = "my";
                    var emailed = "via-email";

                    var time = formatLocalDateTime(message['createdAt']);
                    var timeSplit = time.split(' ');
                    var messageTime = timeSplit[1].substr(0, timeSplit[1].lastIndexOf(":"));

                    var lastMessageYmd = new Date($('#lastMessageDispatchTime').val().split(' ')[0]);
                    var newMessageYmd = new Date(timeSplit[0]);

                    var monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];

                    var miliDifference = Math.abs(lastMessageYmd.getTime() - newMessageYmd.getTime());
                    var html = "";

                    if (Math.ceil(miliDifference / (1000 * 3600 * 24)) > 0) {
                        html += "<div class='messages-date'>" + newMessageYmd.getDate() + " " + monthNames[newMessageYmd.getMonth()] + " " + newMessageYmd.getFullYear() + "</div><hr>";
                    }

                    html += "<div class='message " + sender + " " + emailed + "'><div class='message-owner'>" + status + "</div><div class='message-body'><p>" + message['text'] + "</p><div class='message-time'>" + messageTime + "</div></div></div>";

                    $('.chat-body').css('background-color', '#fff').append(html);
                    $('.my > .message-owner').css({
                        'background-image': 'url(\"' + $('#myAvatar').val() + '\")'
                    });

                    $('#message-input').val("");
                    document.getElementById("file-input").innerHTML = document.getElementById("file-input").innerHTML;
                }
            })
        }
	});
}