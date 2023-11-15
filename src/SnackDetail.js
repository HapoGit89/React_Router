function SnackDetail ({data = {name: "Testsnack", text: "Test snacks good"}}){
    return (
        <div className="SnackDetail">
            <h1>{data.name}</h1>
            <p>{data.text}</p>

        </div>
    )

}

export default SnackDetail