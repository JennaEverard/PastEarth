<?php

// Public version of php file (don't want to expose user/password info)

// The db info is private (the actual php file has these fields filled
// in)
define('DB_HOST', '');
define('DB_NAME', '');
define('DB_CHARSET', 'utf8');
define('DB_USER', '');
define('DB_PASSWORD', '');

$word = $_REQUEST['value'];

try {
	$pdo = new PDO(
		"mysql:host=" . DB_HOST . ";charset=" . DB_CHARSET . ";dbname=" . DB_NAME, DB_USER, DB_PASSWORD
	);
} catch (Exception $ex) { exit($ex->getMessage()); }

$insert = "INSERT INTO `words` (`id`, `word`) VALUES (5, '{$word}')";
$pdo->exec($insert);
$stmt = $pdo->prepare("SELECT * FROM `words`");
$stmt->execute();
$words = $stmt->fetchAll();
foreach($words as $w) {
	printf("<div>%s</div>", $w['word']);
}

$pdo = null;
$stmt = null;
