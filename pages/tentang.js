import Head from 'next/head'
import Menu from '../components/menu';
export default function Tentang() {
return (
<div>
<Head>
<title>Tentang Kami</title>
</Head>
<Menu />
<div>
<h1>Tentang Kami</h1>
<h5>Data Pribadi</h5>
<p> Nama    : Wildan </p>
<p> NIM     : 1118101665 </p>
<p> Jurusan : S1 TEKNIK INFORMATIKA </p>
</div>
</div>
);
}