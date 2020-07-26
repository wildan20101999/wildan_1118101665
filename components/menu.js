import Link from 'next/link';
export default function Menu() {
return (
<div>
<h5>Menu</h5>
<ul>
<li>
<Link href="/"><a>Home</a></Link>
</li>
<li>
<Link href="/tentang"><a>Tentang Kami</a></Link>
</li>
</ul>
</div>
);
}
