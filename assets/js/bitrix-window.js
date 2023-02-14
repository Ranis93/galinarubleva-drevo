export function insertBitrix (parentNode, position) {
  // Вставка popup от Bitrix на кнопку

  const pNode = document.querySelector(parentNode)
  const pos = pNode.querySelector(position)
  const recaptchaScript = document.createElement('script')
  recaptchaScript.setAttribute('data-b24-form', 'click/10/oujvxd')
  recaptchaScript.setAttribute('data-skip-moving', 'true')
  recaptchaScript.innerHTML = "(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b8614405/crm/form/loader_10.js');"
  pNode.insertBefore(recaptchaScript, pos)
}
