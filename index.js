let skor = 0;
let waktu = 10;
let interval;
let gameAktif = false;

function tambahSkor() {
  if (gameAktif) {
      skor++;
          document.getElementById('score').textContent = skor;
            } else {
                alert('Klik "Mulai Ulang" untuk memulai game!');
                  }
                  }

                  function mulaiGame() {
                    skor = 0;
                      waktu = 10;
                        gameAktif = true;
                          document.getElementById('score').textContent = skor;
                            document.getElementById('waktu').textContent = waktu;

                              clearInterval(interval);

                                interval = setInterval(() => {
                                    waktu--;
                                        document.getElementById('waktu').textContent = waktu;

                                            if (waktu <= 0) {
                                                  clearInterval(interval);
                                                        gameAktif = false;
                                                              alert('⏰ Waktu habis! Skor akhir: ' + skor);
                                                                  }
                                                                    }, 1000);
                                                                    }