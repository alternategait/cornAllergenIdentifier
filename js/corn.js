switch ( this.ingredients[key].text ){
            case this.ingredients[key].text.includes("corn"):
            case this.ingredients[key].text.includes("maltodextrin"):
              let cornStatus = "corn";
              break;
            default:
              let cornStatus = "unknown";
          }




          switch ( this.ingredients[key].text ){
            case this.ingredients[key].text.includes("corn"):
            case this.ingredients[key].text.includes("maltodextrin"):
              cornStatus = "corn";
              break;
            default:
              console.log ("all checked");
          }
