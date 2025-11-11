<?php
// ---------------------------
// CONFIGURATION
// ---------------------------
$to = "benjamin.mauroux@gmail.com"; 
$subject = "📬 Nouveau message de contact";

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