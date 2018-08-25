//game tebak angka

//comp vs player

//random angka untuk comp
	var com = Math.floor(Math.random() * 10) + 1;
//console.log(com);
//ambil yang di masukan player di masukan ke pariable p
	var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' );

//pilihan comp vs player ?
	
//cek jika komputer dan player sama
		if( p == com){
			//jika true tampilkan alert lalu keluar dari kondisi
			alert('Selamat !!!..\njawaban anda benar !!!\nanda pilih '+p+' dan komputer pilih '+com+'\nSuksess.!!.');
			//jika false lakukan pengecekan berikut nya

//jika player lebih kecil dari komputer			
		}else if(p <= com){
			//jika true tampilkan alert lalu keluar dari kondisi
				alert('terlalu kecil');
			//jika false player memasukan inputan ke 2 lalu melakukan pengecekan
				var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' );
				//cek jika komputer dan player sama
					if( p == com){
					//jika true tampilkan alert lalu keluar dari kondisi
						alert('Selamat !!!..\njawaban anda benar !!!\nanda pilih '+p+' dan komputer pilih '+com+'\nSuksess.!!.');
					//jika false lakukan pengecekan berikut nya
					}else if(p <= com){
						//jika true tampilkan alert lalu keluar dari kondisi
							alert('terlalu kecil');
						//jika false player memasukan inputan ke 3 lalu melakukan pengecekan
							var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' );
							//cek jika komputer dan player sama
								if( p == com){
								//jika true tampilkan alert lalu keluar dari kondisi
								alert('Selamat !!!..\njawaban anda benar !!!\nanda pilih '+p+' dan komputer pilih '+com+'\nSuksess.!!.');
								//jika false tampilkan alert lalu keuar karna waktu habis
								}else{
									alert('terlalu kecil \nwaktu habis!!');
								}
					//jika selain lebih kecil lakukan pengecekan berikut
					}else{
						alert('terlalu besar');
						//jika false player memasukan inputan ke 3 lalu melakukan pengecekan
							var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' );
						//cek jika komputer dan player sama
								if( p == com){
								alert('Selamat !!!..\njawaban anda benar !!!\nanda pilih '+p+' dan komputer pilih '+com+'\nSuksess.!!.');
								}else{
									alert('terlalu besar \nwaktu habis!!');
								}
					}

//jika player lebih besar dari komputer
		}else if(p >= com){
				alert('terlalu besar');
				var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' );
					if( p == com){
						alert('Selamat !!!..\njawaban anda benar !!!\nanda pilih '+p+' dan komputer pilih '+com+'\nSuksess.!!.');
					}else if(p >= com){
						alert('terlalu besar');
						var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' );
							if( p == com){
							alert('Selamat !!!..\njawaban anda benar !!!\nanda pilih '+p+' dan komputer pilih '+com+'\nSuksess.!!.');
							}else{
								alert('terlalu besar \nwaktu habis!!');
							}
					}else{
						alert('terlalu besar');
						var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' );
							if( p == com){
							alert('Selamat !!!..\njawaban anda benar !!!\nanda pilih '+p+' dan komputer pilih '+com+'\nSuksess.!!.');
							}else{
								alert('terlalu besar \nwaktu habis!!');
							}
					}
//jika palyer memasukan selain angka					
		}else{
			alert('yang anda masukan bukan angka');
		}







		// else if(p >= com){
		// 		alert('terlalu besar' + com);
		// 		var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' + com);
		// 		if( p == com){
		// 			alert('jawaban benar'+com);
		// 		}else if(p >= com){
		// 			alert('terlalu besar'+com);
		// 			var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' + com);
		// 				if( p == com){
		// 				alert('jawaban benar'+com);
		// 				}else{
		// 					alert('terlalu besar \nwaktu habis!!');
		// 				}
		// 		}
			
		// }

		
		//var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' + com);

		
alert('terimakasih.');	
