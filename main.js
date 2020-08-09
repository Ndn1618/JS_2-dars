const rec = new webkitSpeechRecognition()

rec.lang = 'uz-UZ'

rec.onend = function () {
  console.log('Aloqa tugadi.')
}

rec.onresult = function (event) {
  const command = event.results[0][0].transcript.toLowerCase().trim()

 if (buyruq === 'qizil') {
   document.body.style.backgroundColor = 'red'
 }
 else if (buyruq === 'yashil') {
   document.body.style.backgroundColor = 'green'
 }
 else if (buyruq === 'muhammad') {
  console.log('Salom', buyruq)
 }
 else {
   console.log('Tushunmadim.')
 }
}

rec.onerror = function (event) {
  console.log(event)
}

rec.start()
