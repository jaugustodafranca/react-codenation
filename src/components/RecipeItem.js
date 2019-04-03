import React from 'react'

const RecipeItem = (props) => {
    if (props.recipe){
        return(
            <div className="col-sm-3 mt-4">
                <div className="card" onClick={() => window.open(props.recipe.href, "_blank")}>
                    <img className="card-img-top img-fluid" src={props.recipe.thumbnail} alt="recipe-image"/>
                    <div className="card-body">
                        <h5 className="card-title">{getHighlightedText(props.recipe.title, props.filter)}</h5>
                        <p className="card-text">
                            <strong>Ingredients: </strong> {getHighlightedText(props.recipe.ingredients, props.filter)}
                        </p>
                    </div>
                </div>
            </div>
        )
    }else{
        return null
    }
}
const getHighlightedText = (text, higlight) => { 
    let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
    return <React.Fragment> 
            { parts.map((part, i) => 
                (part.toLowerCase() === higlight.toLowerCase()) ? 
                  <mark key={i}>{ part }</mark> 
                : 
                  part
                )
            }
     </React.Fragment>;
  }

export default RecipeItem;