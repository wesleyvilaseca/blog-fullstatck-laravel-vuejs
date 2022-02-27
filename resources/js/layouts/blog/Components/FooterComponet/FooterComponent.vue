<template>
<div>
    <!-- FOOTER -->
    <div class="footer_section">
        <div class="footer_section_social">
            <ul class="footer_section_social_ul">
                <li>
                    <a href="https://www.facebook.com/wesley.vilasecasanches/"><i class="fab fa-facebook-f"></i></a>
                </li>

                <li>
                    <a href="https://www.instagram.com/wesleyvila/"><i class="fab fa-instagram"></i></a>
                </li>

                <li>
                    <a href="https://twitter.com/secawesley"><i class="fab fa-twitter"></i></a>
                </li>

                <li>
                    <a href="https://codevila.com.br"><i class="fa-solid fa-window-maximize"></i></a>
                </li>
            </ul>
        </div>
        <div class="footer_section_mnu">
            <ul class="footer_section_ul">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </div>
    </div>
    <div class="footer_copy_right">
        <p>©2022 CodeVila. Todos os Direitos Reservados</p>
    </div>
    <!-- FOOTER -->
</div>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>
