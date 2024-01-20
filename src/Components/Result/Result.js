const Result = ({debtor,amount,creditor}) => {
    return(
        <article class="message is-dark container" style={{width: '100%'}}>
            <div class="message-body">
                <b>{debtor}</b> paga <b>${amount}</b> a <b>{creditor}</b>
            </div>
        </article>
    )
}

export default Result;