export function insertBitrix (parentNode, position) {
  // Вставка popup от Bitrix на кнопку

  const pNode = document.querySelector(parentNode) // В какой родительский элемент
  const pos = pNode.querySelector(position) // Перед каким элементом
  const recaptchaScript = document.createElement('script')
  recaptchaScript.setAttribute('data-b24-form', 'click/10/oujvxd')
  recaptchaScript.setAttribute('data-skip-moving', 'true')
  recaptchaScript.innerHTML = "(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b8614405/crm/form/loader_10.js');"
  pNode.insertBefore(recaptchaScript, pos)
}

export function insertBitrix2 (parentNode, position) {
  // Вставка popup2 от Bitrix на кнопку

  const pNode = document.querySelector(parentNode)
  const pos = pNode.querySelector(position)
  const recaptchaScript = document.createElement('script')
  recaptchaScript.setAttribute('data-b24-form', 'click/34/4s006v')
  recaptchaScript.setAttribute('data-skip-moving', 'true')
  recaptchaScript.innerHTML = "(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b8614405/crm/form/loader_34.js');"
  pNode.insertBefore(recaptchaScript, pos)
}

export function insertBitrix3 (parentNode, position) {
  // На главной "узнать своих предков", "бесплатная консультация"

  const pNode = document.querySelector(parentNode)
  const pos = pNode.querySelector(position)
  const recaptchaScript = document.createElement('script')
  recaptchaScript.setAttribute('data-b24-form', 'click/7/3bpu86')
  recaptchaScript.setAttribute('data-skip-moving', 'true')
  recaptchaScript.innerHTML = "(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b25400296/crm/form/loader_7.js');"
  pNode.insertBefore(recaptchaScript, pos)
}
export function insertBitrix4 (parentNode, position) {
  // Пакеты услуг. Кнопка "Хочу заказать".

  const pNode = document.querySelector(parentNode)
  const pos = pNode.querySelector(position)
  const recaptchaScript = document.createElement('script')
  recaptchaScript.setAttribute('data-b24-form', 'click/19/rqr0d5')
  recaptchaScript.setAttribute('data-skip-moving', 'true')
  recaptchaScript.innerHTML = "(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b25400296/crm/form/loader_19.js');"
  pNode.insertBefore(recaptchaScript, pos)
}
