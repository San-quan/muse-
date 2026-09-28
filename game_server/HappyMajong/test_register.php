<?php
error_reporting(E_ALL); ini_set('display_errors', 1);
use \Workerman\Worker;
use \GatewayWorker\Register;

require_once __DIR__ . '/vendor/autoload.php';

echo "before new Register\n";
try {
    $register = new Register('text://0.0.0.0:1281');
    echo "Register created: " . spl_object_hash($register) . "\n";
} catch (Throwable $e) {
    echo "Error: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . ":" . $e->getLine() . "\n";
}
echo "done\n";
