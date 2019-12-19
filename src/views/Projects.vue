<template>
    <div class="projects-wrapper">
        <h1>Projects</h1>
        <p>Here are few of the companies I have worked on and few personal projects.</p>

        <p class="intro">
            I'm currently accepting projects as Freelancer as well, so if you want to improve your User Experience, redesign a page or even create a project from scratch,
            <router-link to="contact" tag="a" class="link">drop me a message</router-link>.
        </p>

        <div class="project">
            <span class="date">Current</span>
            <h2>PrimeIT</h2>
            <p>Working on inside projects inside PrimeIT, mainly doing front-end development using HTML5, CSS3 and ES6/7.</p>
        </div>
        <div class="project">
            <span class="date">2.5 years</span>
            <h2>IBM - Marketing Services Center</h2>
            <p>Started my path at IBM as a Web builder, responsible for maintaining and adding new content to already existing pages for all Spanish Speaking Countries.</p>
            <p>
                Then I moved to one of the biggest teams inside IBM, called Global Business Services (GBS for short) and
                <a
                    href="https://www.ibm.com/services/ibmix/"
                    target="_blank"
                    class="link"
                >IBM iX</a> . GBS were a fast-paced, multidisciplinary team, using
                <a
                    href="https://www.agilealliance.org/what-is-scrumban/"
                    class="link"
                >Scrumban</a> as our agile methodology and Jira as our tracking tool.
            </p>
            <p>While on this team, me and my team were responsible for create and update product, event and landing pages, few pages are handled by a CMS called Drupal. The main tools used to create content were a IBM Library (Bootstrap-like), HTML5, CSS3 and ES6. As for the developer environment, we used Gulp.js as our tasker, SASS as our CSS preprocessor tool. Aside from all that, I also created A/B testing using Hotjar.</p>
        </div>
        <div class="project">
            <span class="date">1 year</span>
            <h2>Agregar Tecnologia</h2>
            <p>
                My first job, as Help-desk. Agregar is a company that does I.T As-a-Service to other companies. My daily activities were mostly troubleshoting and problem-solving our many clients needs, from fixing software issues to fix broken hardware. I also took care of our clients servers, making sure that the backup schedule were on point. At some point on Agregar, I noticed that the backup system could be improved, since we had many servers to take care, and this single activity could take a couple of hours every other day. So I created few scripts on PowerShell to let us know the status of the backups. I also created few other automatization scripts for
                <a
                    href="https://www.connectwise.com/labtech-now-connectwise-automate"
                    target="_blank"
                    class="link"
                >Labtech</a>, a remote monitoring and management tool.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Projects"
};
</script>

<style lang="scss" scoped>
.projects-wrapper {
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-self: center;
}
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