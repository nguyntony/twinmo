import {Redirect, Link} from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div class="box">
            <div class="box__ghost">
                <div class="symbol"></div>
                <div class="symbol"></div>
                <div class="symbol"></div>
                <div class="symbol"></div>
                <div class="symbol"></div>
                <div class="symbol"></div>
                
                <div class="box__ghost-container">
                <div class="box__ghost-eyes">
                    <div class="box__eye-left"></div>
                    <div class="box__eye-right"></div>
                </div>
                <div class="box__ghost-bottom">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                </div>
                <div class="box__ghost-shadow"></div>
            </div>
            
            <div class="box__description">
                <div class="box__description-container">
                <div class="box__description-title">Whoops!</div>
                <div class="box__description-text">It seems like we couldn't find the page you were looking for</div>
                </div>
                
                <Link to="/member/home" target="_blank" class="box__button">Go Home</Link>
                
            </div>
            
        </div>
    )
}