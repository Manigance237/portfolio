    document.addEventListener("DOMContentLoaded", () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
          card.style.transition = 'all 0.6s ease';
          card.style.opacity = 1;
          card.style.transform = 'translateY(0)';
        }, 200 * index);
      });
    });


    function envoyerMessage() {
  const form = document.getElementById('contactForm');
  const nom = form.nom.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (nom && email && message) {
    const liste = document.getElementById('liste-messages');
    const li = document.createElement('li');
    li.style.marginBottom = "10px";
    li.style.background = "rgba(74,217,255,0.08)";
    li.style.borderRadius = "6px";
    li.style.padding = "8px 12px";
    li.innerHTML = `<strong>${nom}</strong> (${email}) :<br>${message}`;
    liste.prepend(li);
    form.reset();
  }
}



document.getElementById('contactForm').onsubmit = function(event) {
  event.preventDefault();
  envoyerMessage();
};

function envoyerMessage() {
  const form = document.getElementById('contactForm');
  const nom = form.nom.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (nom && email && message) {
    const liste = document.getElementById('liste-messages');
    const li = document.createElement('li');
    li.innerHTML = `<strong>${nom}</strong> (${email}) :<br>${message}
      <div class="reponse-zone"></div>
      <button class="btn-repondre">Répondre</button>
    `;
    liste.prepend(li);

    li.querySelector('.btn-repondre').onclick = function() {
      const zone = li.querySelector('.reponse-zone');
      if (!zone.querySelector('textarea')) {
        zone.innerHTML = `
          <textarea rows="2"></textarea>
          <button class="btn-envoyer-reponse">Envoyer</button>
        `;
        zone.querySelector('.btn-envoyer-reponse').onclick = function() {
          const reponse = zone.querySelector('textarea').value.trim();
          if (reponse) {
            zone.innerHTML = `<div style="margin-top:6px;color:#4ad9ff;"><b>Réponse :</b> ${reponse}</div>`;
          }
        };
      }
    };

    form.reset();
  }
}
