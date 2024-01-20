import Result from "../Result/Result";

const ResultContainer = ({array})=>{
    
    return(
        <div className="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center is-flex-wrap-wrap mb-3" style={{width: '100%'}}>
            {
                array.map(element => {
                    const lePaga = element.lepaga.filter(e => e.paga !== 0)
                    return(
                        lePaga.map(x => {
                                return(
                                    <Result key={lePaga.indexOf(x)} debtor={x.name} amount={Number(x.paga.toFixed(2))} creditor={element.name}/>
                                )
                            
                        })
                    )
                })
            }  
        </div>
    )
}
//
export default ResultContainer;