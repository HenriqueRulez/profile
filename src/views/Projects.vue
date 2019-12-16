<template>
    <section>
        <div>
            <h1>Projects</h1>
            <p
                class="intro"
            >Here are few of the companies I have worked on and few personal projects.</p>

            <div class="project">
                <span class="date">Current</span>
                <h2>PrimeIT</h2>
                <p>Working on nearshore projects inside PrimeIT, mainly doing front-end development using HTML5, CSS3 and ES6/7.</p>
            </div>
            <div class="project">
                <span class="date">2.5 years</span>
                <h2>IBM - Marketing Services Center</h2>
                <p>Started my path at IBM as a Web builder, responsible for maintaining and adding new content to already existing pages for all Spanish Speaking Countries.</p>
                <p>
                    Then I moved to one of the biggest teams inside IBM, called Global Business Services (GBS for short). GBS were a fast-paced, multidisciplinary team, using
                    <a
                        href="https://www.agilealliance.org/what-is-scrumban/"
                        class="link"
                    >Scrumban</a> as our agile methodology and Jira as our tracking tool.
                </p>
                <p>While on this team, me and my team were responsible for create and update product, event and landing pages, few pages are handled by a CMS called Drupal. The main tools used to create content were a IBM Library (Bootstrap-like), HTML5, CSS3 and ES6. As for the developer environment, we used Gulp.js as our tasker, SASS as our CSS preprocessor tool. Aside from all that, I also created A/B testing using Hotjar.</p>
            </div>
            <div class="project">
                <span class="date">Current</span>
                <h2>PrimeIT</h2>
                <p>Working on nearshore projects inside PrimeIT, mainly doing front-end development using HTML5, CSS3 and ES6/7.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Projects"
};
</script>

<style lang="scss" >
.intro {
    padding-bottom: 20px;
}
.project {
    position: relative;
    padding-bottom: 20px;
}
.date {
    position: absolute;
    top: -8px;
    left: 0;
    font-size: 0.8rem;
}
</style>