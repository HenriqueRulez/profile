<template>
    <section class="nav">
        <div>
            <img src="../assets/me.png" alt="Hey, this is my profile pic!" />
        </div>
        <div class="router">
            <ul>
                <li>
                    <router-link to="/" tag="a" class="link">Home</router-link>
                </li>
                <li>
                    <router-link to="me" tag="a" class="link">Me</router-link>
                </li>
                <li>
                    <router-link to="projects" tag="a" class="link">Projects</router-link>
                </li>
                <li>
                    <router-link to="connect" tag="a" class="link">Connect</router-link>
                </li>
                <li>
                    <router-link to="contact" tag="a" class="link">Contact</router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "SideNav"
};
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 250px;
    background: #f6f3ff;
    padding: 40px;
    text-align: center;
    @media screen and (max-width: 650px) {
        padding: 40px 40px 0 40px;
        flex-direction: row;
    }
}
img {
    border-radius: 50%;
    overflow: hidden;
    width: 50px;
    margin-bottom: 40px;
    @media screen and (max-width: 650px) {
        margin-bottom: 0px;
    }
}

.router {
    display: flex;
    flex-direction: column;
    width: 100%;
    @media screen and (max-width: 650px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    & li {
        margin-bottom: 10px;
        @media screen and (max-width: 650px) {
            margin-right: 20px;
            display: inline-block;
        }
    }
}
</style>