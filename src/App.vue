<template>
    <div id="app">
        <SideNav />
        <div class="main-view">
            <transition mode="out-in">
                <router-view />
            </transition>
        </div>
    </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
    font-family: "IBM Plex Sans", Helvetica, sans-serif;
    color: #444;
}

::selection {
    background: rgba(255, 235, 20, 0.7);
    color: #111;
}

body,
ul,
li,
h1,
h2 {
    padding: 0px;
    margin: 0px;
}

p {
    line-height: 1.4rem;
    margin: 20px 0;
}
ul {
    list-style: none;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    height: 100%;
    min-height: 100vh;
    background: #f6f3ff;

    @media screen and (max-width: 650px) {
        display: block;
    }
}

.main-view {
    display: flex;
    flex-direction: column;
    padding: 40px;
    width: 100%;
    height: 100%;
    background: #f6f3ff;
    @media screen and (max-width: 650px) {
        padding: 10px 40px 40px 40px;
    }
}

a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    &.link {
        box-shadow: inset 0 -3px 0 -1px #cd9cf2;
        transition: box-shadow 0.15s ease-in-out;
        line-height: 20px;
    }

    &.link:hover {
        box-shadow: inset 0 -20px 0 -1px #cd9cf2;
    }
    &.link:hover:active {
        color: magenta;
    }
}

h1 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 40px;
}

.cls-1 {
    fill: red;
}

/*Vue classes */
.v-enter,
.v-leave-to {
    opacity: 0;
}

.v-enter {
    transform: translate3d(0, -20px, 0);
}

.v-leave-to {
    transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
    transition: all 0.3s;
}

.router-link-exact-active {
    color: darken($color: #cd9cf2, $amount: 30%);
    &::before {
        content: ">";
    }
    &::after {
        content: "<";
    }
}
</style>
