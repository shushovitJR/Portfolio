<?php
    $mysql = mysqli_connect('localhost','root','','my_portfolio');
    mysqli_set_charset($mysql, 'utf8mb4');

    if($mysql){
        echo "You are connected <br>";
    }
    else{
        echo "couldn't connect <br>";
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
    <link rel="stylesheet" href="../css/sample_portfolio.css">
    <script src="../js/sample_portfolio.js"></script>
</head>
<style>
    .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input,textarea {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#submit {
    padding: 10px 20px;
    background-color: #6a1b9a;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 85%;
}
</style>
<body>
<header id="nav" class="affix">
    <a href="../index.html"><div class="logo"><img src="../img,files/sjr-high-resolution-logo-transparent.png" alt="image not found"></div></a>
 </header>
<div class="contact-form">
        <form action="portfolio.php" method="post">
        <input type="text" placeholder="Your Name" id="name" name="your_name">
        <input type="email" placeholder="Enter Email" id="email" name="your_email">
        <textarea placeholder="Write Something" id="textarea" name="message"></textarea>
        <input type="submit" name="submit" value="Contact Me" id="submit">
        </form>
    </div>
    <script src="sample_portfolio.js"></script>
</body>
</html>
<?php
    if ($_SERVER["REQUEST_METHOD"]=="POST"){
        $name = filter_input(INPUT_POST,"your_name",FILTER_SANITIZE_SPECIAL_CHARS);
        $email = $_POST['your_email'];
        $message = $_POST['message'];
        if (empty($name)){
            echo "Enter your name <br>";
        }
        elseif (empty($email)){
            echo "Enter your email <br>";
        }
        elseif (empty($message)){
            echo "Enter a message <br>";
        }
        else{
            $sql = "INSERT INTO user (name, email, Message)
            VALUES ('$name','$email','$message')";
            try{
                mysqli_query($mysql,$sql);
                echo "Message Sent";
            }
            catch(mysqli_sql_exception){
                echo "Error in taking data!!";
            }
        }
    }

    mysqli_close($mysql);
?>