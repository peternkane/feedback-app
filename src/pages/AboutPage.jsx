import Card from "../components/shared/Card"

function AboutPage() {
    return (
        <Card>
            <div className="about">
            <h1>This is About page</h1>
            <p> this is react app</p>
            <p>Version 1.0.0</p>
            <p><a href="/">Return to Home Page</a></p>
            </div>

        </Card>
    )
}

export default AboutPage