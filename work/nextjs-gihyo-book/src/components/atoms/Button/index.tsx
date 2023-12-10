import styled from "styled-components";
import { Responsive } from "@/types/styles";
import { toPropValue,Color,FontSize,LetterSpacing,LineHeight,Space } from "@/utils/styles";

export type ButtomVariant = 'primary'|'secondary'|'danger'

const variants = {
    primary:{
        color:'white',
        backgroundcolor:'primary',
        pseudoClass:{
            hover:{
                backgroundColor:'primaryDark'
            },
            disabled:{
                backgroundColor:'primary'
            }
        }
    },
    secondary:{
        color:'white',
        backgroundcolor:'secondary',
        border:'none',
        pseudoClass:{
            hover:{
                backgroundColor:'secondaryDark'
            },
            disabled:{
                backgroundColor:'secondary'
            }
        }
    },
    danger:{
        color:'white',
        backgroundcolor:'danger',
        border:'none',
        pseudoClass:{
            hover:{
                backgroundColor:'dangerDark'
            },
            disabled:{
                backgroundColor:'danger'
            }
        }
    }
}

const Button = (): JSX.Element => {
    return (
        <button>
        </button>
    )
}