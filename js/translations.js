/* ─────────────────────────────────────────────────────────────
   Alle Texte der Website in vier Sprachen.
   Zum Anpassen einfach die Strings ändern – die Schlüssel müssen
   mit den data-i18n-Attributen in index.html übereinstimmen.
   ───────────────────────────────────────────────────────────── */
const I18N = {

  de: {
    "title": "Anil & Victor · 19. September 2026",
    "hero.pre": "Wir heiraten",
    "hero.date": "19. September 2026",
    "hero.venue": "Belvoirpark · Zürich",

    "countdown.title": "Bis zum grossen Tag",
    "countdown.days": "Tage",
    "countdown.hours": "Stunden",
    "countdown.minutes": "Minuten",
    "countdown.seconds": "Sekunden",
    "countdown.married": "Frisch verheiratet!",

    "program.title": "Programm",
    "program.sub": "Samstag, 19. September 2026",
    "program.t1.time": "15:00 Uhr",
    "program.t1.name": "Zeremonie",
    "program.t1.desc": "Wir geben uns das Ja-Wort im Park",
    "program.t2.time": "anschliessend",
    "program.t2.name": "Apéro",
    "program.t2.desc": "Anstossen, Lachen und Sonne im Grünen",
    "program.t3.time": "am Abend",
    "program.t3.name": "Dinner",
    "program.t3.desc": "Gemeinsam geniessen wir ein festliches Dinner",
    "program.t4.time": "bis in die Nacht",
    "program.t4.name": "Tanz",
    "program.t4.desc": "Wir tanzen bis spät in die Nacht",

    "location.title": "Ort & Anreise",
    "location.sub": "Wir feiern im Grünen – mitten in Zürich, ein paar Schritte vom See.",
    "location.maps": "In Google Maps öffnen",
    "location.tram.title": "Tram & Bus",
    "location.tram.text": "Tram 7 (Richtung Wollishofen) bis «Brunaustrasse» – 2 Gehminuten. Oder Bus 161/165 bis «Sukkulentensammlung».",
    "location.train.title": "Mit dem Zug",
    "location.train.text": "Mit der S-Bahn bis Bahnhof Enge, danach ein schöner Spaziergang von rund 8 Minuten durch den Park.",
    "location.car.title": "Mit dem Auto",
    "location.car.text": "Parkplätze rund um den Park sind rar – wir empfehlen die Anreise mit dem ÖV oder dem Taxi.",

    "rsvp.title": "Seid ihr dabei?",
    "rsvp.text": "Der schönste Tag wird noch schöner mit euch. Wir freuen uns riesig, mit euch zu feiern!",
    "rsvp.yes": "Mit Freude zusagen",
    "rsvp.no": "Leider absagen",
    "rsvp.note": "Die persönliche Einladung mit allen Details folgt – die Anmeldung ist bald möglich.",
    "rsvp.toast": "Merci! Die Anmeldung wird bald freigeschaltet.",

    "dress.title": "Dresscode",
    "dress.text": "Festlich elegant – und bequem genug zum Tanzen.",
    "gifts.title": "Geschenke",
    "gifts.text": "Euer Kommen ist für uns das grösste Geschenk. Wer uns darüber hinaus eine Freude machen möchte, darf gerne einen kleinen Beitrag an unsere Hochzeitsreise leisten.",

    "footer.tagline": "Wir freuen uns auf euch!",
    "footer.made": "Mit Liebe gemacht"
  },

  tr: {
    "title": "Anil & Victor · 19 Eylül 2026",
    "hero.pre": "Evleniyoruz",
    "hero.date": "19 Eylül 2026",
    "hero.venue": "Belvoirpark · Zürih",

    "countdown.title": "Büyük güne kalan",
    "countdown.days": "Gün",
    "countdown.hours": "Saat",
    "countdown.minutes": "Dakika",
    "countdown.seconds": "Saniye",
    "countdown.married": "Evlendik!",

    "program.title": "Program",
    "program.sub": "19 Eylül 2026, Cumartesi",
    "program.t1.time": "15:00",
    "program.t1.name": "Tören",
    "program.t1.desc": "Parkta birbirimize evet diyoruz",
    "program.t2.time": "ardından",
    "program.t2.name": "Kokteyl",
    "program.t2.desc": "Yeşillikler içinde kadeh kaldırıyoruz",
    "program.t3.time": "akşam",
    "program.t3.name": "Akşam Yemeği",
    "program.t3.desc": "Birlikte keyifli bir akşam yemeği",
    "program.t4.time": "gece boyunca",
    "program.t4.name": "Dans",
    "program.t4.desc": "Sabaha kadar dans ediyoruz",

    "location.title": "Konum & Ulaşım",
    "location.sub": "Zürih'in kalbinde, göle birkaç adım uzaklıkta yemyeşil bir parkta kutluyoruz.",
    "location.maps": "Google Haritalar'da aç",
    "location.tram.title": "Tramvay & Otobüs",
    "location.tram.text": "7 numaralı tramvay (Wollishofen yönü) ile «Brunaustrasse» durağı – 2 dakikalık yürüyüş. Alternatif: 161/165 otobüsü ile «Sukkulentensammlung».",
    "location.train.title": "Trenle",
    "location.train.text": "S-Bahn ile Bahnhof Enge'ye, oradan parkın içinden yaklaşık 8 dakikalık keyifli bir yürüyüş.",
    "location.car.title": "Arabayla",
    "location.car.text": "Park çevresinde otopark çok sınırlı – toplu taşıma veya taksi öneririz.",

    "rsvp.title": "Bizimle misiniz?",
    "rsvp.text": "En güzel günümüz sizinle daha da güzel olacak. Sizinle kutlamak için sabırsızlanıyoruz!",
    "rsvp.yes": "Seve seve geliyorum",
    "rsvp.no": "Maalesef gelemiyorum",
    "rsvp.note": "Tüm detayları içeren davetiye yakında – kayıt çok yakında açılıyor.",
    "rsvp.toast": "Teşekkürler! Kayıt yakında açılacak.",

    "dress.title": "Kıyafet",
    "dress.text": "Şık ve zarif – dans etmeye de uygun olsun!",
    "gifts.title": "Hediyeler",
    "gifts.text": "Bizim için en değerli hediye yanımızda olmanız. Yine de bir şey yapmak isterseniz, balayı kasamıza yapacağınız küçük bir katkıya çok seviniriz.",

    "footer.tagline": "Sizi aramızda görmekten mutluluk duyacağız!",
    "footer.made": "Sevgiyle hazırlandı"
  },

  en: {
    "title": "Anil & Victor · 19 September 2026",
    "hero.pre": "We're getting married",
    "hero.date": "19 September 2026",
    "hero.venue": "Belvoir Park · Zurich",

    "countdown.title": "Until the big day",
    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.minutes": "Minutes",
    "countdown.seconds": "Seconds",
    "countdown.married": "Just married!",

    "program.title": "Programme",
    "program.sub": "Saturday, 19 September 2026",
    "program.t1.time": "3:00 pm",
    "program.t1.name": "Ceremony",
    "program.t1.desc": "We say “I do” beneath the trees",
    "program.t2.time": "to follow",
    "program.t2.name": "Apéro",
    "program.t2.desc": "Raise a glass with us on the lawn",
    "program.t3.time": "in the evening",
    "program.t3.name": "Dinner",
    "program.t3.desc": "A festive dinner together",
    "program.t4.time": "into the night",
    "program.t4.name": "Dance",
    "program.t4.desc": "We dance until late",

    "location.title": "Venue & Directions",
    "location.sub": "We celebrate in a leafy park in the heart of Zurich, a stone's throw from the lake.",
    "location.maps": "Open in Google Maps",
    "location.tram.title": "Tram & Bus",
    "location.tram.text": "Tram 7 (towards Wollishofen) to “Brunaustrasse” – a 2-minute walk. Or bus 161/165 to “Sukkulentensammlung”.",
    "location.train.title": "By train",
    "location.train.text": "Take the S-Bahn to Bahnhof Enge, then enjoy a lovely 8-minute stroll through the park.",
    "location.car.title": "By car",
    "location.car.text": "Parking around the park is scarce – we recommend public transport or a taxi.",

    "rsvp.title": "Will you join us?",
    "rsvp.text": "Our favourite day will be even better with you there. We can't wait to celebrate with you!",
    "rsvp.yes": "Joyfully accept",
    "rsvp.no": "Regretfully decline",
    "rsvp.note": "Personal invitations with all the details will follow – RSVP opens soon.",
    "rsvp.toast": "Thank you! RSVP will open shortly.",

    "dress.title": "Dress code",
    "dress.text": "Festive elegance – comfortable enough to dance in.",
    "gifts.title": "Gifts",
    "gifts.text": "Your presence is the greatest gift of all. Should you wish to give something more, a small contribution to our honeymoon would make us very happy.",

    "footer.tagline": "We look forward to celebrating with you!",
    "footer.made": "Made with love"
  },

  it: {
    "title": "Anil & Victor · 19 settembre 2026",
    "hero.pre": "Ci sposiamo",
    "hero.date": "19 settembre 2026",
    "hero.venue": "Belvoirpark · Zurigo",

    "countdown.title": "Al grande giorno",
    "countdown.days": "Giorni",
    "countdown.hours": "Ore",
    "countdown.minutes": "Minuti",
    "countdown.seconds": "Secondi",
    "countdown.married": "Sposati!",

    "program.title": "Programma",
    "program.sub": "Sabato 19 settembre 2026",
    "program.t1.time": "ore 15:00",
    "program.t1.name": "Cerimonia",
    "program.t1.desc": "Ci diciamo di sì nel parco",
    "program.t2.time": "a seguire",
    "program.t2.name": "Aperitivo",
    "program.t2.desc": "Brindisi e risate sul prato",
    "program.t3.time": "in serata",
    "program.t3.name": "Cena",
    "program.t3.desc": "Una cena in festa tutti insieme",
    "program.t4.time": "fino a notte fonda",
    "program.t4.name": "Balli",
    "program.t4.desc": "Si balla fino a tardi",

    "location.title": "Luogo & Come arrivare",
    "location.sub": "Festeggiamo in un parco verde nel cuore di Zurigo, a due passi dal lago.",
    "location.maps": "Apri in Google Maps",
    "location.tram.title": "Tram & Bus",
    "location.tram.text": "Tram 7 (direzione Wollishofen) fino a «Brunaustrasse» – 2 minuti a piedi. Oppure bus 161/165 fino a «Sukkulentensammlung».",
    "location.train.title": "In treno",
    "location.train.text": "Con la S-Bahn fino a Bahnhof Enge, poi una piacevole passeggiata di circa 8 minuti nel parco.",
    "location.car.title": "In auto",
    "location.car.text": "I parcheggi intorno al parco sono limitati – consigliamo i mezzi pubblici o il taxi.",

    "rsvp.title": "Ci sarete?",
    "rsvp.text": "Il nostro giorno più bello lo sarà ancora di più con voi. Non vediamo l'ora di festeggiare insieme!",
    "rsvp.yes": "Accetto con gioia",
    "rsvp.no": "Purtroppo non posso",
    "rsvp.note": "L'invito personale con tutti i dettagli arriverà presto – la conferma sarà presto possibile.",
    "rsvp.toast": "Grazie! Le conferme apriranno a breve.",

    "dress.title": "Dress code",
    "dress.text": "Elegante e festoso – comodo quanto basta per ballare.",
    "gifts.title": "Regali",
    "gifts.text": "La vostra presenza è il regalo più bello. Se desiderate comunque farci un pensiero, saremo felici di un piccolo contributo per il nostro viaggio di nozze.",

    "footer.tagline": "Vi aspettiamo!",
    "footer.made": "Fatto con amore"
  }
};
