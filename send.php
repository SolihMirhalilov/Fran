<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $city = htmlspecialchars($_POST['city']);
    $message = htmlspecialchars($_POST['message']);

    // Куда отправить
    $to = "info@franshizi.com";

    // Тема
    $subject = "Отправлено с Центр развития франчайзинга";

    // Сообщение
    $body = "
    <h2>Новая заявка</h2>
    <p><strong>Имя:</strong> $name</p>
    <p><strong>Телефон:</strong> $phone</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Город:</strong> $city</p>
    <p><strong>Комментарий:</strong> $message</p>
    ";

    // Заголовки
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Центр развития франчайзинга <no-reply@franshizi.com>" . "\r\n";

    // Отправка
    if (mail($to, $subject, $body, $headers)) {
        echo "Заявка успешно отправлена!";
    } else {
        echo "Ошибка при отправке...";
    }
}

?>

