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

<style lang="scss">
.nav {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 250px;
    background: #f6f3ff;
    padding: 40px;
    text-align: center;
}
img {
    border-radius: 50%;
    overflow: hidden;
    width: 50px;
    margin-bottom: 40px;
}

.router {
    li {
        margin-bottom: 10px;
    }
}

.router {
    display: flex;
    flex-direction: column;
}
</style>