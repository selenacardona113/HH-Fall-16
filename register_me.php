<?php
include "config.php";
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['school'])    ||
   empty($_POST['gradYear'])  ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) {
    echo "No arguments Provided!";
    return false;
   }
  
$name = $_POST['name'];
$school= $_POST['school'];
$email = $_POST['email'];
$grad_year = $_POST['gradYear'];
$hardware = $_POST['hardware'];

$email_subject = "Thank you for registering for HackHolyoke!";
$email_body = 
   "Dear $name, \n\nThank you for registering for HackHolyoke!\nWhile we are still reviewing applications, you will be contacted once we process all applications after registration closes on March 20th if we can confirm your spot. 
   \nIf you have any questions, email us!
   \n\n- the HackHolyoke Team";
$headers = "From: hackholyoke@gmail.com"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$header= array(
    'From: hackholyoke@gmail.com',
    'Content-Type: text/html');

// MAIL MESSAGE
mail($email,$email_subject,$email_body,$headers);
mail('elkha22n@mtholyoke.edu',$email_subject,$email_body,$headers);

// INSERT INTO DATABASE and UPLOAD RESUMES
$insert = "INSERT INTO hackers VALUES('$name','$email','$school','$grad_year','$hardware')";
// move_uploaded_file($_FILES['resume']["tmp_name"], "/home/nachwael/resumes/" . $_FILES['resume']["name"]);

if( isset($_FILES["file"]["type"]) ) {
  $sourcePath = $_FILES['file']['tmp_name'];       // Storing source path of the file in a variable
  $targetPath = "/home/nachwael/resumes/".$_FILES['file']['name']; // Target path where file is to be stored
  move_uploaded_file($sourcePath, $targetPath);    // Moving Uploaded file
}

// not sure what this does...
// echo $name = $_Files['file']['name'];
$conn->query($insert);
return true;      
?>