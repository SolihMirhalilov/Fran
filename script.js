const click = document.getElementById('click');
const navbar = document.getElementById('navbar');

click.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
});



const TOKEN = '8262351588:AAH96wq6BCOoBtrzg5iXGC-BDYyxlyXDtfA';
const CHAT_ID = '-4830515900';
const API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.querySelector('.registr form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;

  const name = form.querySelector('input[placeholder="Ваше имя"]').value.trim();
  const phone = form.querySelector('input[placeholder="Номер телефона"]').value.trim();
  const email = form.querySelector('input[placeholder="Email"]').value.trim();
  const city = form.querySelector('input[placeholder="Город"]').value.trim();
  const comment = form.querySelector('textarea[placeholder="Коментарии"]').value.trim();

  const message = `
<b>📥 Новая заявка с сайта</b>\n
👤 <b>Имя:</b> ${name}
📞 <b>Телефон:</b> ${phone}
✉️ <b>Email:</b> ${email}
🏙 <b>Город:</b> ${city}
💬 <b>Комментарий:</b> ${comment}
  `;

  try {
    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    alert('✅ Заявка успешно отправлена!');
    form.reset();
  } catch (error) {
    alert('❌ Ошибка при отправке заявки.');
    console.error('Telegram error:', error);
  }
});
