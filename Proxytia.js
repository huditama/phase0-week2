var nama = '';
var peran = '';

if (nama === '') {
  console.log('Nama harus diisi!')
}

else if (peran === '') {
  console.log('Halo ' + nama + ' ! Pilih peranmu untuk memulai!')
}

else if (peran === 'Ksatria') {
  console.log('Selamat Datang di Dunia Proxytia, ' + nama + '.')
  console.log('Halo ' + peran + ' ' + nama + ', ' + 'kamu dapat menyerang dengan senjatamu!')
}

else if (peran === 'Tabib') {
  console.log('Selamat Datang di Dunia Proxytia, ' + nama + '.')
  console.log('Halo ' + peran + ' ' + nama + ', ' + 'kamu akan membantu temanmu yang terluka.')
}

else if (peran === 'Penyihir') {
  console.log('Selamat Datang di Dunia Proxytia, ' + nama + '.')
  console.log('Halo ' + peran + ' ' + nama + ', ' + 'ciptakan keajaiban yang membantu kemenanganmu!')
}