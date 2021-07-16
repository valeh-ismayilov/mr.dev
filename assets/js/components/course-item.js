class Course extends HTMLElement{
    constructor() {
        super();
        // HTML Tags of Component
        this.innerHTML = `
        <style>
            * {
                font-family: Arial;
            }
            .course-item {
                margin: auto;
                padding: 15px;
                background: rgb(243, 243, 243);
                width: 200px;
                border: 1px solid lightgray;
                border-radius: 10px;
                margin-top: 20px;
                margin-bottom: 20px;
            }
            .course-image {
                width: 160px;
            }
            .course-title {
                font-size: 25px;
                font-weight: bold;
                color: var(--second-color);
                padding-top: 10px;
                padding-bottom: 10px;
                text-align: center;
            }
            .course-about{
                font-size: 20px;
                padding-bottom: 10px;
                opacity: 0.7;
            }
            .course-link-container {
                margin-top: 10px;
                margin-bottom: 10px;
                text-align: center;
            }
            .course-link {
                background: var(--second-color);
                color: var(--next-color);
                font-weight: bold;
                text-decoration: none;
                padding: 10px;
                border: 1px solid lightgray;
                border-radius: 10px;
                transition: 600ms;
                font-size: 20px;
            }
            .course-link:hover {
                opacity: 0.7;
                transition: 600ms;
            }
        </style>
        <div class="course-item">
            <div class="course-image-container">
                <center>
                    <img class="course-image" src="./assets/img/course-icon/${this.getAttribute('image')}.png">
                </center>
            </div>
            <div class="course-title">
                ${this.getAttribute('title')}
            </div>
            <div class="course-about">
                ${this.getAttribute('shortAbout')}
            </div>
            <div class="course-link-container">
                <a class="course-link" target="_blank" href="${this.getAttribute('link')}">
                    Ətraflı
                </a>
            </div>
        </div>
        `;
    }
connectedCallback() {
    console.log("Connected Plugin")
}
disconnectedCallback() {
    console.log("Disconnected Plugin")
}
}

window.customElements.define('course-item', Course);