console.log("Service Worker Cargado...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recibido...");
  self.registration.showNotification(data.title, {
    body: "Pablo Torres",
    icon: "https://covid19-ecuador.herokuapp.com/images/icons/Kingdom.png"
  });
});