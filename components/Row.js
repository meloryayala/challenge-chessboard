import style from '../styles/Board.module.css'

const Row = () => {
    const boxes = new Array(4).fill(["white", "black"]).flat()

    const boardRows = new Array(4).fill(["row", "row-reverse"]).flat()
    console.log(boardRows)

    const rowLine = (boardRow) => {
        console.log(boardRow)
        return (
            <div style={{
                display: "flex",
                flexDirection: boardRow
            }}>
                {
                    boxes.map(box =>
                        <div
                            key={box.length}
                            className={style.box}
                            style={{
                                backgroundColor: box,
                            }}
                        ></div>)
                }
            </div>
        )
    }



    return (
        <div className={style.chess}>
            {
                boardRows.map(boardRow => rowLine(boardRow))
            }
        </div>
    )
}

export default Row