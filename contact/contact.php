<?php
$allowed_origins = [
    'https://ryavocat.netlify.app',
    'https://ryavocat.fr'
];

// Récupérer l’origine de la requête
if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Répondre directement à la requête OPTIONS (préflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ---------------------------
// CONFIGURATION
// ---------------------------
$to = "rachel.yvernes@avocat.fr"; 
$subject = "ryavocat.fr - Nouveau message de contact";

// ---------------------------
// PROTECTION ANTI-SPAM
// ---------------------------
if (!empty($_POST['website'])) {
  // Si le champ honeypot est rempli, c'est un bot
  http_response_code(400);
  exit("Spam détecté.");
}

// ---------------------------
// VALIDATION BASIQUE
// ---------------------------
$required_fields = ['nom', 'email', 'message'];
foreach ($required_fields as $field) {
  if (empty($_POST[$field])) {
    http_response_code(400);
    exit("Erreur : champ '$field' manquant.");
  }
}

// ---------------------------
// CONSTRUCTION DU MESSAGE
// ---------------------------
$nom = htmlspecialchars($_POST['nom']);
$entreprise = htmlspecialchars($_POST['entreprise'] ?? '');
$email = htmlspecialchars($_POST['email']);
$telephone = htmlspecialchars($_POST['telephone'] ?? '');
$motif = htmlspecialchars($_POST['motif'] ?? '');
$message = htmlspecialchars($_POST['message']);

$body = "
<h2>Nouveau message de contact</h2>
<p><strong>Nom :</strong> {$nom}</p>
<p><strong>Entreprise :</strong> {$entreprise}</p>
<p><strong>Email :</strong> {$email}</p>
<p><strong>Téléphone :</strong> {$telephone}</p>
<p><strong>Motif :</strong> {$motif}</p>
<p><strong>Message :</strong><br>{$message}</p>
";

// ---------------------------
// ENVOI DU MAIL
// ---------------------------
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: {$nom} <{$email}>" . "\r\n";

if (mail($to, $subject, $body, $headers)) {
  echo "✅ Message envoyé avec succès.";
} else {
  http_response_code(500);
  echo "❌ Erreur lors de l'envoi du message.";
}
?>