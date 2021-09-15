export const Main = () => {
    return (
        <main className="main-content">
            <section className="main__header">
                <h2 className="main__header__title">
                    A modern publishing platform
                </h2>
                <p className="main__header__subtitle">
                    Grow your audience and build your online brand with the world’s largest library of videos, audio, and text.
                </p>
                <div className="main__header__buttons">
                    <button>Start for free</button>
                    <button>Learn More</button>
                </div>
            </section>
            <section className="main__introduction-content">
                <div className="main__introduction">
                    <h1 className="main__introduction__title">
                        Designed for the future
                    </h1>
                    <div className="main__introduction__section">
                        <div className="main__introduction__section-articles">
                            <article>
                                <h3>Introducing an extensible editor</h3>
                                <p>
                                    Blogr features an exceedingly intuitive interface which
                                    lets you focus on one thing: creating content. The editor
                                    supports management of multiple blogs and allows easy manipulation
                                    of embeds such as images, videos, and Markdown. Extensibility with
                                    plugins and themes provide easy ways to add functionality or change
                                    the looks of a blog.
                                </p>
                            </article>
                            <article>
                                <h3>Robust content management</h3>
                                <p>
                                    Flexible content management enables users to easily
                                    move through posts. Increase the usability of your
                                    blog by adding customized categories, sections,
                                    format, or flow. With this functionality, you’re in
                                    full control.
                                </p>
                            </article>
                        </div>
                        <figure>
                            <img src="assets/images/illustration-editor-mobile.svg" alt="editor" />
                        </figure>
                    </div>
                </div>
            </section>
            <section className="main__article-state">
                <div>
                    <img src="assets/images/illustration-phones.svg " alt="" />
                    <article>
                        <h3>State of the Art Infrastructure</h3>
                        <p>
                            With reliability and speed in mind, worldwide data centers
                            provide the backbone for ultra-fast connectivity. This ensures
                            your site will load instantly, no matter where your readers are,
                            keeping your site competitive.
                        </p>
                    </article>
                </div>
            </section>
            <section className="main__information">
                <div>
                    <section>
                        <img src="assets/images/illustration-laptop-mobile.svg" alt="" />
                    </section>
                    <section>
                        <article>
                            <h3>Free, open, simple</h3>
                            <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                        </article>
                        <article>
                            <h3>Powerful tooling</h3>
                            <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
                        </article>
                    </section>
                </div>
            </section>
        </main>
    )
}