
export const kuisioners = [
        {
            id: 1,
            name_test : "Sleeping Disorders Assesment",
            general_test : [
                {
                    general_question: "Apakah anda sedang mengalami gangguan tidur",
                    answer : [
                        "yes",
                        "no"
                    ]
                },
                {
                    general_question: "Apakah kegiatan anda terganggu karena sering merasa mengantuk",
                    answer : [
                        "yes",
                        "no"
                    ]
                }
            ],
            complete_test: [
                {   
                    complete_question: "Kesulitan untuk memulai tidur",
                    complete_option : [
                        {
                            answer: "Tidak",
                            weight: 0
                        },
                        {
                            answer: "Mudah",
                            weight: 1
                        },
                        {
                            answer: "Cukup Sulit",
                            weight: 2
                        },
                        {
                            answer: "Sulit",
                            weight: 3
                        },
                        {
                            answer: "Sangat Sulit",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Sulit untuk mempertahankan tidur",
                    complete_option: [
                        {
                            answer: "Tidak",
                            weight: 0
                        },
                        {
                            answer: "Mudah",
                            weight: 1
                        },
                        {
                            answer: "Cukup Sulit",
                            weight: 2
                        },
                        {
                            answer: "Sulit",
                            weight: 3
                        },
                        {
                            answer: "Sangat Sulit",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Terbangun lebih cepat dari biasanya",
                    complete_option : [
                        {
                            answer: "Tidak",
                            weight: 0
                        },
                        {
                            answer: "Mudah",
                            weight: 1
                        },
                        {
                            answer: "Cukup Sulit",
                            weight: 2
                        },
                        {
                            answer: "Sulit",
                            weight: 3
                        },
                        {
                            answer: "Sangat Sulit",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda teratur tidur dan bangun pada waktu yang sama setiap hari?",
                    complete_option : [
                        {
                            answer: "Tidak Pernah",
                            weight: 0
                        },
                        {
                            answer: "Kadang-kadang",
                            weight: 1
                        },
                        {
                            answer: "Sering",
                            weight: 2
                        },
                        {
                            answer: "Selalu",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda sering tidur siang?",
                    complete_option: [
                        {
                            answer: "Tidak Pernah",
                            weight: 0
                        },
                        {
                            answer: "Kadang-kadang",
                            weight: 1
                        },
                        {
                            answer: "Sering",
                            weight: 2
                        },
                        {
                            answer: "Selalu",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda memperhatikan kualitas kasur dan bantal untuk kenyamanan tidur?",
                    complete_option: [
                        {
                            answer: "Tidak Pernah",
                            weight: 0
                        },
                        {
                            answer: "Kadang-kadang",
                            weight: 1
                        },
                        {
                            answer: "Sering",
                            weight: 2
                        },
                        {
                            answer: "Selalu",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah anda mendengkur?",
                    complete_option: [
                        {
                            answer: "Ya",
                            weightt: 1
                        },
                        {
                            answer: "Tidak",
                            weight: 0
                        },
                        {
                            answer: "Tidak Tahu",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Bagaimana dengkuran anda?",
                    complete_option : [
                        {
                            answer: "Suaranya seperti suara bernapas",
                            weight: 0
                        },
                        {
                            answer: "Sekeras seperti saat berbicara",
                            weight: 1
                        },
                        {
                            answer: "Lebih keras daripada saat berbicara",
                            weightt: 1
                        },
                        {
                            answer: "Sangat keras, sehingga dapat terdengar diruang sebelah",
                            weight: 1
                        }
                    ]
                },
                {
                    complete_question: "Seberapa sering anda mendengkur?",
                    complete_option: [
                        {
                            answer: "Hampir setiap hari",
                            weight: 1
                        },
                        {
                            answer: "3-4x/minggu",
                            weight: 1
                        },
                        {
                            answer: "1-2x/minggu",
                            weight: 1
                        },
                        {
                            answer: "1-2x/bulan",
                            weight: 1
                        },
                        {
                            answer: "Tidak pernah/hamper tidak pernah",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Apakah dengkuran anda mengganggu orang lain?",
                    complete_option : [
                        {
                            answer: "Ya",
                            weight: 1
                        },
                        {
                            answer: "Tidak",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Apakah seseorang mengetahui bahwa anda memiliki nafas yang berat ketika tertidur?",
                    complete_option : [
                        {
                            answer: "Hampir setiap hari",
                            weight: 1
                        },
                        {
                            answer: "3-4x/minggu",
                            weight: 1
                        },
                        {
                            answer: "1-2x/minggu",
                            weight: 1
                        },
                        {
                            answer: "1-2x/bulan",
                            weight: 1
                        },
                        {
                            answer: "Tidak pernah/hamper tidak pernah",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda menggunakan tempat tidur hanya untuk tidur dan berhubungan intim?",
                    complete_option : [
                        {
                            answer: "Tidak Pernah",
                            weight: 0
                        },
                        {
                            answer: "Kadang-kadang",
                            weight: 1
                        },
                        {
                            answer: "Sering",
                            weight: 2
                        },
                        {
                            answer: "Selalu",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda pernah tidur dengan gangguan suara seperti suara TV atau radio?",
                    complete_option : [
                        {
                            answer: "Tidak Pernah",
                            weight: 0
                        },
                        {
                            answer: "Kadang-kadang",
                            weight: 1
                        },
                        {
                            answer: "Sering",
                            weight: 2
                        },
                        {
                            answer: "Selalu",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda menghindari paparan cahaya terang atau cahaya biru dari ponsel atau gadget lainnya sebelum tidur?",
                    complete_option : [
                        {
                            answer: "Tidak Pernah",
                            weight: 0
                        },
                        {
                            answer: "Kadang-kadang",
                            weight: 1
                        },
                        {
                            answer: "Sering",
                            weight: 2
                        },
                        {
                            answer: "Selalu",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Seberapa puaskah anda dengan pola tidur anda saat ini?",
                    complete_option : [
                        {
                            answer: "Sangat Puas",
                            weight: 0
                        },
                        {
                            answer: "Puas",
                            weight: 1
                        },
                        {
                            answer: "Cukup Puas",
                            weight: 2
                        },
                        {
                            answer: "Tidak Puas",
                            weight: 3
                        },
                        {
                            answer: "Sangat Tidak Puas",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Seberapa sadarkah orang sekitar anda yang berpikir bahwa anda memiliki gangguan tidur?",
                    complete_option : [
                        {
                            answer: "Tidak Mengetahui Sama Sekali",
                            weight: 0
                        },
                        {
                            answer: "Sedikit",
                            weight: 1
                        },
                        {
                            answer: "Terkadang",
                            weight: 2
                        },
                        {
                            answer: "Mengetahui",
                            weight: 3
                        },
                        {
                            answer: "Sangat Mengetahui",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Seberapa khawatir/tertekan anda mengenai gangguan tidur yang anda alami?",
                    complete_option : [
                        {
                            answer: "Tidak Khawatir Sama Sekali",
                            weight: 0
                        },
                        {
                            answer: "Sedikit",
                            weight: 1
                        },
                        {
                            answer: "Terkadang",
                            weight: 2
                        },
                        {
                            answer: "Khawatir",
                            weight: 3
                        },
                        {
                            answer: "Sangat Khawatir",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda pernah mengonsumsi kafein dalam 4 jam sebelum tidur?",
                    complete_option : [
                        {
                            answer: "Tidak Pernah",
                            weight: 0
                        },
                        {
                            answer: "Kadang-kadang",
                            weight: 1
                        },
                        {
                            answer: "Sering",
                            weight: 2
                        },
                        {
                            answer: "Selalu",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda memiliki kebiasaan merokok?",
                    complete_option : [
                        {
                            answer: "Tidak Pernah",
                            weight: 0
                        },
                        {
                            answer: "Kadang-kadang",
                            weight: 1
                        },
                        {
                            answer: "Sering",
                            weight: 2
                        },
                        {
                            answer: "Selalu",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda pernah minum alkohol dalam 4 jam sebelum tidur?",
                    complete_option : [
                        {
                            answer: "Tidak Pernah",
                            weight: 0
                        },
                        {
                            answer: "Kadang-kadang",
                            weight: 1
                        },
                        {
                            answer: "Sering",
                            weight: 2
                        },
                        {
                            answer: "Selalu",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda menghindari makan makanan yang berat atau sulit dicerna menjelang tidur?",
                    complete_option : [
                        {
                            answer: "Tidak Pernah",
                            weight: 0
                        },
                        {
                            answer: "Kadang-kadang",
                            weight: 1
                        },
                        {
                            answer: "Sering",
                            weight: 2
                        },
                        {
                            answer: "Selalu",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda melakukan olahraga secara teratur?",
                    complete_option : [
                        {
                            answer: "Tidak Pernah",
                            weight: 0
                        },
                        {
                            answer: "Kadang-kadang",
                            weight: 1
                        },
                        {
                            answer: "Sering",
                            weight: 2
                        },
                        {
                            answer: "Selalu",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda pernah merasa terganggu oleh rasa sakit saat tidur?",
                    complete_option : [
                        {
                            answer: "Tidak Pernah",
                            weight: 0
                        },
                        {
                            answer: "Kadang-kadang",
                            weight: 1
                        },
                        {
                            answer: "Sering",
                            weight: 2
                        },
                        {
                            answer: "Selalu",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Seberapa sering anda merasa lelah atau letih setelah bangun tidur?",
                    complete_option : [
                        {
                            answer: "Hampir setiap hari",
                            weight: 1
                        },
                        {
                            answer: "3-4x/minggu",
                            weight: 1
                        },
                        {
                            answer: "1-2x/minggu",
                            weight: 1
                        },
                        {
                            answer: "1-2x/bulan",
                            weight: 1
                        },
                        {
                            answer: "Tidak pernah/hamper tidak pernah",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Selama waktu bangun tidur, apakah Anda merasa lelah, letih, atau tidak bersemangat?",
                    complete_option : [
                        {
                            answer: "Hampir setiap hari",
                            weight: 1
                        },
                        {
                            answer: "3-4x/minggu",
                            weight: 1
                        },
                        {
                            answer: "1-2x/minggu",
                            weight: 1
                        },
                        {
                            answer: "1-2x/bulan",
                            weight: 1
                        },
                        {
                            answer: "Tidak pernah/hamper tidak pernah",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Pernahkah anda merasa mengantuk atau tertidur saat sedang berkendara?",
                    complete_option : [
                        {
                            answer: "Hampir setiap hari",
                            weight: 1
                        },
                        {
                            answer: "3-4x/minggu",
                            weight: 1
                        },
                        {
                            answer: "1-2x/minggu",
                            weight: 1
                        },
                        {
                            answer: "1-2x/bulan",
                            weight: 1
                        },
                        {
                            answer: "Tidak pernah/hamper tidak pernah",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Apakah anda memiliki tekanan darah tinggi?",
                    complete_option : [
                        {
                            answer: "Hampir setiap hari",
                            weight: 1
                        },
                        {
                            answer: "Ya",
                            weight: 1
                        },
                        {
                            answer: "Tidak",
                            weight: 0
                        },
                        {
                            answer: "Tidak Tahu",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Menurut anda seberapa pengaruhkah gangguan tidur yang anda alami mempengaruhi kegiatan anda sehari-hari (seperti mengantuk disiang hari, regulasi emosi, kemampuan bekerja, konsentrasi dan memori) saat ini?",
                    complete_option : [
                        {
                            answer: "Tidak Mengganggu Sama Sekali",
                            weight: 0
                        },
                        {
                            answer: "Sedikit",
                            weight: 1
                        },
                        {
                            answer: "Terkadang",
                            weight: 2
                        },
                        {
                            answer: "Menganggu",
                            weight: 3
                        },
                        {
                            answer: "Sangat Mengganggu",
                            weight: 4
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name_test: "Stress Assesment",
            general_test: [
                {
                    general_question: "Apakah anda sedang mengalami stress",
                    answer : [
                        "yes",
                        "no"
                    ]
                },
                {
                    general_question: "Apakah anda tidak dapat berkonsentrasi dan mengatur emosi anda",
                    answer : [
                        "yes",
                        "no"
                    ]
                }
            ],
            complete_test: [
                {
                    complete_question: "Bagaimana pendapat Anda tentang kemampuan Anda dalam menangani masalah yang muncul dalam kehidupan Anda",
                    complete_option :[
                        {
                            answer : "Hampir tidak pernah",
                            weight: 1
                        },
                        {
                            answer : "Kadang-kadang",
                            weight: 2
                        },
                        {
                            answer : "Cukup sering",
                            weight: 3
                        },
                        {
                            answer : "Sangat sering",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Seberapa sering dalam 1 bulan terakhir Anda merasa tidak mampu mengontrol segala hal yang terjadi dalam hidup Anda?",
                    complete_option :[
                        {
                            answer : "Hampir tidak pernah",
                            weight: 1
                        },
                        {
                            answer : "Kadang-kadang",
                            weight: 2
                        },
                        {
                            answer : "Cukup sering",
                            weight: 3
                        },
                        {
                            answer : "Sangat sering",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Seberapa sering dalam 1 bulan terakhir Anda merasa tidak mampu mengatasi hal-hal yang harus Anda lakukan?",
                    complete_option :[
                        {
                            answer : "Hampir tidak pernah",
                            weight: 1
                        },
                        {
                            answer : "Kadang-kadang",
                            weight: 2
                        },
                        {
                            answer : "Cukup sering",
                            weight: 3
                        },
                        {
                            answer : "Sangat sering",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Seberapa sering dalam 1 bulan terakhir Anda merasa bahwa hidup Anda terlalu sulit??",
                    complete_option :[
                        {
                            answer : "Hampir tidak pernah",
                            weight: 4
                        },
                        {
                            answer : "Kadang-kadang",
                            weight: 3
                        },
                        {
                            answer : "Cukup sering",
                            weight: 2
                        },
                        {
                            answer : "Sangat sering",
                            weight: 1
                        }
                    ]
                },
                {
                    complete_question: "Seberapa sering dalam 1 bulan terakhir Anda merasa bahwa Anda tidak mampu menangani semua hal yang harus Anda lakukan?",
                    complete_option :[
                        {
                            answer : "Hampir tidak pernah",
                            weight: 4
                        },
                        {
                            answer : "Kadang-kadang",
                            weight: 3
                        },
                        {
                            answer : "Cukup sering",
                            weight: 2
                        },
                        {
                            answer : "Sangat sering",
                            weight: 1
                        }
                    ]
                },
                {
                    complete_question: "Seberapa sering dalam 1 bulan terakhir Anda merasa bahwa Anda dapat mengatasi masalah yang tidak terduga?",
                    complete_option :[
                        {
                            answer : "Hampir tidak pernah",
                            weight: 1
                        },
                        {
                            answer : "Kadang-kadang",
                            weight: 2
                        },
                        {
                            answer : "Cukup sering",
                            weight: 3
                        },
                        {
                            answer : "Sangat sering",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Seberapa sering dalam 1 bulan terakhir Anda merasa terganggu oleh hal-hal yang tidak penting?",
                    complete_option :[
                        {
                            answer : "Hampir tidak pernah",
                            weight: 4
                        },
                        {
                            answer : "Kadang-kadang",
                            weight: 3
                        },
                        {
                            answer : "Cukup sering",
                            weight: 2
                        },
                        {
                            answer : "Sangat sering",
                            weight: 1
                        }
                    ]
                },
                {
                    complete_question: "Seberapa sering dalam 1 bulan terakhir Anda merasa kesulitan dalam menghadapi masalah atau tantangan dalam hidup Anda?",
                    complete_option :[
                        {
                            answer : "Hampir tidak pernah",
                            weight: 4
                        },
                        {
                            answer : "Kadang-kadang",
                            weight: 3
                        },
                        {
                            answer : "Cukup sering",
                            weight: 2
                        },
                        {
                            answer : "Sangat sering",
                            weight: 1
                        }
                    ]
                },
                {
                    complete_question: "Seberapa sering dalam 1 bulan terakhir Anda merasa bahwa hal-hal tidak berjalan sesuai rencana Anda?",
                    complete_option :[
                        {
                            answer : "Hampir tidak pernah",
                            weight: 4
                        },
                        {
                            answer : "Kadang-kadang",
                            weight: 3
                        },
                        {
                            answer : "Cukup sering",
                            weight: 2
                        },
                        {
                            answer : "Sangat sering",
                            weight: 1
                        }
                    ]
                },
                {
                    complete_question: "Seberapa sering dalam 1 bulan terakhir Anda merasa bahwa masalah dalam hidup Anda bertumpuk-tumpuk hingga sulit untuk diatasi?",
                    complete_option :[
                        {
                            answer : "Hampir tidak pernah",
                            weight: 1
                        },
                        {
                            answer : "Kadang-kadang",
                            weight: 2
                        },
                        {
                            answer : "Cukup sering",
                            weight: 3
                        },
                        {
                            answer : "Sangat sering",
                            weight: 4
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            name_test : "Anxiety Assesments",
            general_test : [
                {
                    general_question: "Apakah anda sedang mengalami cemas yang berlebih",
                    answer : [
                        "yes",
                        "no"
                    ]
                },
                {
                    general_question: "Apakah anda sering merasa berkeringat atau gemetar berlebihan",
                    answer : [
                        "yes",
                        "no"
                    ]
                }
            ],
            complete_test:[
                {
                    complete_question: "Apakah pasien merasa tegang atau gelisah?",
                    complete_option:[
                        {
                            answer: "tidak ada",
                            weight: 0
                        },
                        {
                            answer: "ringan",
                            weight: 1
                        },
                        {
                            answer: "sedang",
                            weight: 2
                        },
                        {
                            answer: "berat",
                            weight: 3
                        },
                        {
                            answer: "sangat berat",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah pasien merasa gugup atau takut?",
                    complete_option:[
                        {
                            answer: "tidak ada",
                            weight: 0
                        },
                        {
                            answer: "ringan",
                            weight: 1
                        },
                        {
                            answer: "sedang",
                            weight: 2
                        },
                        {
                            answer: "berat",
                            weight: 3
                        },
                        {
                            answer: "sangat berat",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah pasien sering merasa waspada atau terganggu?",
                    complete_option:[
                        {
                            answer: "tidak ada",
                            weight: 0
                        },
                        {
                            answer: "ringan",
                            weight: 1
                        },
                        {
                            answer: "sedang",
                            weight: 2
                        },
                        {
                            answer: "berat",
                            weight: 3
                        },
                        {
                            answer: "sangat berat",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah pasien merasa sulit untuk tidur atau tetap tidur?",
                    complete_option:[
                        {
                            answer: "tidak ada",
                            weight: 0
                        },
                        {
                            answer: "ringan",
                            weight: 1
                        },
                        {
                            answer: "sedang",
                            weight: 2
                        },
                        {
                            answer: "berat",
                            weight: 3
                        },
                        {
                            answer: "sangat berat",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah pasien merasa mudah lelah atau lemah?",
                    complete_option:[
                        {
                            answer: "tidak ada",
                            weight: 0
                        },
                        {
                            answer: "ringan",
                            weight: 1
                        },
                        {
                            answer: "sedang",
                            weight: 2
                        },
                        {
                            answer: "berat",
                            weight: 3
                        },
                        {
                            answer: "sangat berat",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda merasa mudah lelah atau kelelahan akibat kecemasan tersebut?",
                    complete_option:[
                        {
                            answer: "Tidak Sama Sekali",
                            weight: 0
                        },
                        {
                            answer: "Sewaktu-waktu",
                            weight: 1
                        },
                        {
                            answer: "Setiap Hari",
                            weight: 2
                        },
                        {
                            answer: "Hampir Setiap Hari",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda merasa kesulitan untuk berkonsentrasi akibat kecemasan tersebut?",
                    complete_option:[
                        {
                            answer: "Tidak Sama Sekali",
                            weight: 0
                        },
                        {
                            answer: "Sewaktu-waktu",
                            weight: 1
                        },
                        {
                            answer: "Setiap Hari",
                            weight: 2
                        },
                        {
                            answer: "Hampir Setiap Hari",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda merasa gugup atau gelisah akibat kecemasan tersebut?",
                    complete_option:[
                        {
                            answer: "Tidak Sama Sekali",
                            weight: 0
                        },
                        {
                            answer: "Sewaktu-waktu",
                            weight: 1
                        },
                        {
                            answer: "Setiap Hari",
                            weight: 2
                        },
                        {
                            answer: "Hampir Setiap Hari",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah pasien merasa kesulitan untuk bernafas atau merasa sesak napas?",
                    complete_option:[
                        {
                            answer: "tidak ada",
                            weight: 0
                        },
                        {
                            answer: "ringan",
                            weight: 1
                        },
                        {
                            answer: "sedang",
                            weight: 2
                        },
                        {
                            answer: "berat",
                            weight: 3
                        },
                        {
                            answer: "sangat berat",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah pasien merasa sulit untuk menelan atau terasa seperti ada sesuatu yang terjebak di tenggorokannya?",
                    complete_option:[
                        {
                            answer: "tidak ada",
                            weight: 0
                        },
                        {
                            answer: "ringan",
                            weight: 1
                        },
                        {
                            answer: "sedang",
                            weight: 2
                        },
                        {
                            answer: "berat",
                            weight: 3
                        },
                        {
                            answer: "sangat berat",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah pasien merasa sulit untuk menelan atau terasa seperti ada sesuatu yang terjebak di tenggorokannya?",
                    complete_option:[
                        {
                            answer: "tidak ada",
                            weight: 0
                        },
                        {
                            answer: "ringan",
                            weight: 1
                        },
                        {
                            answer: "sedang",
                            weight: 2
                        },
                        {
                            answer: "berat",
                            weight: 3
                        },
                        {
                            answer: "sangat berat",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah pasien merasa mual atau muntah?",
                    complete_option:[
                        {
                            answer: "tidak ada",
                            weight: 0
                        },
                        {
                            answer: "ringan",
                            weight: 1
                        },
                        {
                            answer: "sedang",
                            weight: 2
                        },
                        {
                            answer: "berat",
                            weight: 3
                        },
                        {
                            answer: "sangat berat",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah pasien merasa sering mengalami pusing atau sakit kepala?",
                    complete_option:[
                        {
                            answer: "tidak ada",
                            weight: 0
                        },
                        {
                            answer: "ringan",
                            weight: 1
                        },
                        {
                            answer: "sedang",
                            weight: 2
                        },
                        {
                            answer: "berat",
                            weight: 3
                        },
                        {
                            answer: "sangat berat",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah kecemasan tersebut mengganggu pekerjaan atau aktivitas sosial Anda?",
                    complete_option:[
                        {
                            answer: "Tidak Sama Sekali",
                            weight: 0
                        },
                        {
                            answer: "Sewaktu-waktu",
                            weight: 1
                        },
                        {
                            answer: "Setiap Hari",
                            weight: 2
                        },
                        {
                            answer: "Hampir Setiap Hari",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda merasa gelisah, gugup, atau tegang secara fisik akibat kecemasan tersebut?",
                    complete_option:[
                        {
                            answer: "Tidak Sama Sekali",
                            weight: 0
                        },
                        {
                            answer: "Sewaktu-waktu",
                            weight: 1
                        },
                        {
                            answer: "Setiap Hari",
                            weight: 2
                        },
                        {
                            answer: "Hampir Setiap Hari",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah pasien sering merasa cemas tentang kesehatannya atau merasa bahwa ada sesuatu yang salah dengan tubuhnya?",
                    complete_option:[
                        {
                            answer: "tidak ada",
                            weight: 0
                        },
                        {
                            answer: "ringan",
                            weight: 1
                        },
                        {
                            answer: "sedang",
                            weight: 2
                        },
                        {
                            answer: "berat",
                            weight: 3
                        },
                        {
                            answer: "sangat berat",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah pasien merasa sering cemas tentang masa depan atau kesulitan dalam mengambil keputusan?",
                    complete_option:[
                        {
                            answer: "tidak ada",
                            weight: 0
                        },
                        {
                            answer: "ringan",
                            weight: 1
                        },
                        {
                            answer: "sedang",
                            weight: 2
                        },
                        {
                            answer: "berat",
                            weight: 3
                        },
                        {
                            answer: "sangat berat",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah pasien merasa sering cemas tentang masa depan atau kesulitan dalam mengambil keputusan?",
                    complete_option:[
                        {
                            answer: "tidak ada",
                            weight: 0
                        },
                        {
                            answer: "ringan",
                            weight: 1
                        },
                        {
                            answer: "sedang",
                            weight: 2
                        },
                        {
                            answer: "berat",
                            weight: 3
                        },
                        {
                            answer: "sangat berat",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah pasien merasa mudah terkejut atau cemas ketika ada suara keras?",
                    complete_option:[
                        {
                            answer: "tidak ada",
                            weight: 0
                        },
                        {
                            answer: "ringan",
                            weight: 1
                        },
                        {
                            answer: "sedang",
                            weight: 2
                        },
                        {
                            answer: "berat",
                            weight: 3
                        },
                        {
                            answer: "sangat berat",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah pasien merasa bahwa hatinya berdebar-debar atau jantungnya berdetak dengan cepat?",
                    complete_option:[
                        {
                            answer: "tidak ada",
                            weight: 0
                        },
                        {
                            answer: "ringan",
                            weight: 1
                        },
                        {
                            answer: "sedang",
                            weight: 2
                        },
                        {
                            answer: "berat",
                            weight: 3
                        },
                        {
                            answer: "sangat berat",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah pasien merasa berkeringat atau gemetar tanpa alasan yang jelas?",
                    complete_option:[
                        {
                            answer: "tidak ada",
                            weight: 0
                        },
                        {
                            answer: "ringan",
                            weight: 1
                        },
                        {
                            answer: "sedang",
                            weight: 2
                        },
                        {
                            answer: "berat",
                            weight: 3
                        },
                        {
                            answer: "sangat berat",
                            weight: 4
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda merasa cemas, gelisah, atau khawatir?",
                    complete_option:[
                        {
                            answer: "Tidak Sama Sekali",
                            weight: 0
                        },
                        {
                            answer: "Sewaktu-waktu",
                            weight: 1
                        },
                        {
                            answer: "Setiap Hari",
                            weight: 2
                        },
                        {
                            answer: "Hampir Setiap Hari",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah Anda merasa sulit untuk mengendalikan kecemasan tersebut?",
                    complete_option:[
                        {
                            answer: "Tidak Sama Sekali",
                            weight: 0
                        },
                        {
                            answer: "Sewaktu-waktu",
                            weight: 1
                        },
                        {
                            answer: "Setiap Hari",
                            weight: 2
                        },
                        {
                            answer: "Hampir Setiap Hari",
                            weight: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            name_test : "Depression Assesments",
            general_test : [
                {
                    general_question: "Apakah anda sering merasa tidak berguna?",
                    answer : [
                        "yes",
                        "no"
                    ]
                },
                {
                    general_question: "Apakah anda sering merasa putus asa?",
                    answer : [
                        "yes",
                        "no"
                    ]
                }
            ],
            complete_test:[
                {
                    complete_question: "Apakah anda puas dengan hidup anda?",
                    complete_option:[
                        {
                            answer: "Ya",
                            weight: 0
                        },
                        {
                            answer: "Tidak",
                            weight: 1
                        }
                    ]
                },
                {
                    complete_question: "Apakah anda meninggalkan kegiatan dan hobi anda?",
                    complete_option:[
                        {
                            answer: "Ya",
                            weight: 1
                        },
                        {
                            answer: "Tidak",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Apakah anda merasa hidup anda kosong?",
                    complete_option:[
                        {
                            answer: "Ya",
                            weight: 1
                        },
                        {
                            answer: "Tidak",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Apakah anda sering merasa bosan?",
                    complete_option:[
                        {
                            answer: "Ya",
                            weight: 1
                        },
                        {
                            answer: "Tidak",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Apakah anda selalu merasa semangat?",
                    complete_option:[
                        {
                            answer: "Ya",
                            weight: 0
                        },
                        {
                            answer: "Tidak",
                            weight: 1
                        }
                    ]
                },
                {
                    complete_question: "Dalam 4 minggu terakhir, seberapa sering Anda merasa buruk tentang diri sendiri, merasa seperti Anda adalah orang yang gagal atau mengecewakan orang lain?",
                    complete_option:[
                        {
                            answer: "Tidak pernah",
                            weight: 0
                        },
                        {
                            answer: "Beberapa hari",
                            weight: 1
                        },
                        {
                            answer: "Lebih dari separuh hari",
                            weight: 2
                        },
                        {
                            answer: "Hampir setiap hari",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Dalam 4 minggu terakhir, seberapa sering Anda merasa tertekan, murung, atau putus asa?",
                    complete_option:[
                        {
                            answer: "Tidak pernah",
                            weight: 0
                        },
                        {
                            answer: "Beberapa hari",
                            weight: 1
                        },
                        {
                            answer: "Lebih dari separuh hari",
                            weight: 2
                        },
                        {
                            answer: "Hampir setiap hari",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Dalam 4 minggu terakhir, seberapa sering Anda merasa kurang nafsu makan atau terlalu banyak makan?",
                    complete_option:[
                        {
                            answer: "Tidak pernah",
                            weight: 0
                        },
                        {
                            answer: "Beberapa hari",
                            weight: 1
                        },
                        {
                            answer: "Lebih dari separuh hari",
                            weight: 2
                        },
                        {
                            answer: "Hampir setiap hari",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah anda takut jika sesuatu buruk terjadi kepada anda?",
                    complete_option:[
                        {
                            answer: "Ya",
                            weight: 1
                        },
                        {
                            answer: "Tidak",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Apakah anda selalu merasa senang?",
                    complete_option:[
                        {
                            answer: "Ya",
                            weight: 0
                        },
                        {
                            answer: "Tidak",
                            weight: 1
                        }
                    ]
                },
                {
                    complete_question: "Apakah anda sering merasa tidak berdaya?",
                    complete_option:[
                        {
                            answer: "Ya",
                            weight: 1
                        },
                        {
                            answer: "Tidak",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Apakah anda lebih suka tinggal dirumah, dibandingkan pergi keluar dan melakukan sesuatu yang baru?",
                    complete_option:[
                        {
                            answer: "Ya",
                            weight: 1
                        },
                        {
                            answer: "Tidak",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Apakah anda merasa mempunya masalah dengan ingatan akhir-akhir ini?",
                    complete_option:[
                        {
                            answer: "Ya",
                            weight: 1
                        },
                        {
                            answer: "Tidak",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Dalam 4 minggu terakhir, seberapa sering Anda merasa kurang bersemangat atau kurang tertarik pada kegiatan yang biasanya Anda sukai?",
                    complete_option:[
                        {
                            answer: "Tidak pernah",
                            weight: 0
                        },
                        {
                            answer: "Beberapa hari",
                            weight: 1
                        },
                        {
                            answer: "Lebih dari separuh hari",
                            weight: 2
                        },
                        {
                            answer: "Hampir setiap hari",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Dalam 4 minggu terakhir, seberapa sering Anda merasa sulit berkonsentrasi pada sesuatu, seperti membaca surat kabar atau menonton televisi?",
                    complete_option:[
                        {
                            answer: "Tidak pernah",
                            weight: 0
                        },
                        {
                            answer: "Beberapa hari",
                            weight: 1
                        },
                        {
                            answer: "Lebih dari separuh hari",
                            weight: 2
                        },
                        {
                            answer: "Hampir setiap hari",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Dalam 4 minggu terakhir, seberapa sering Anda merasa lambat atau gelisah, sehingga orang lain lebih cepat daripada Anda?",
                    complete_option:[
                        {
                            answer: "Tidak pernah",
                            weight: 0
                        },
                        {
                            answer: "Beberapa hari",
                            weight: 1
                        },
                        {
                            answer: "Lebih dari separuh hari",
                            weight: 2
                        },
                        {
                            answer: "Hampir setiap hari",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Apakah anda merasa senang hidup sekarang?",
                    complete_option:[
                        {
                            answer: "Ya",
                            weight: 1
                        },
                        {
                            answer: "Tidak",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Apakah anda merasa sangat tidak berharga dengan keadaan anda sekarang?",
                    complete_option:[
                        {
                            answer: "Ya",
                            weight: 1
                        },
                        {
                            answer: "Tidak",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Apakah anda merasa penuh dengan energi?",
                    complete_option:[
                        {
                            answer: "Ya",
                            weight: 0
                        },
                        {
                            answer: "Tidak",
                            weight: 1
                        }
                    ]
                },
                {
                    complete_question: "Apakah anda merasa bahwa situasi anda tidak berdaya?",
                    complete_option:[
                        {
                            answer: "Ya",
                            weight: 1
                        },
                        {
                            answer: "Tidak",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Apakah anda berpikir bahwa semua orang lebih baik dari pada anda?",
                    complete_option:[
                        {
                            answer: "Ya",
                            weight: 1
                        },
                        {
                            answer: "Tidak",
                            weight: 0
                        }
                    ]
                },
                {
                    complete_question: "Dalam 4 minggu terakhir, seberapa sering Anda sulit tidur atau terlalu banyak tidur?",
                    complete_option:[
                        {
                            answer: "Tidak pernah",
                            weight: 0
                        },
                        {
                            answer: "Beberapa hari",
                            weight: 1
                        },
                        {
                            answer: "Lebih dari separuh hari",
                            weight: 2
                        },
                        {
                            answer: "Hampir setiap hari",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Dalam 4 minggu terakhir, seberapa sering Anda merasa lelah atau kurang bertenaga?",
                    complete_option:[
                        {
                            answer: "Tidak pernah",
                            weight: 0
                        },
                        {
                            answer: "Beberapa hari",
                            weight: 1
                        },
                        {
                            answer: "Lebih dari separuh hari",
                            weight: 2
                        },
                        {
                            answer: "Hampir setiap hari",
                            weight: 3
                        }
                    ]
                },
                {
                    complete_question: "Dalam 4 minggu terakhir, seberapa sering Anda merasa bahwa hidup tidak berarti, atau berpikir untuk mengakhiri hidup Anda?",
                    complete_option:[
                        {
                            answer: "Tidak pernah",
                            weight: 0
                        },
                        {
                            answer: "Beberapa hari",
                            weight: 1
                        },
                        {
                            answer: "Lebih dari separuh hari",
                            weight: 2
                        },
                        {
                            answer: "Hampir setiap hari",
                            weight: 3
                        }
                    ]
                }
            ]
        }
    ]