let score = JSON.parse(localStorage.getItem('score'));

            if (score === null){
                score = {
                    wins: 0,
                    losses: 0,
                    ties: 0
                };
            }

            updateScoreElement();


            function playGame(playerMove){
                const computermove = pickComputerMove();
                let result = '';
                if(playerMove === 'scissors'){
                    if (computermove === 'rock'){
                        result = 'You Lose';
                    }
                    else if ( computermove === 'paper'){
                        result = 'You Win';
                    }
                    else if ( computermove === 'scissors'){
                        result = 'Tie';
                    }
                }

                else if(playerMove === 'rock'){
                    if (computermove === 'rock'){
                        result = 'Tie';
                    }
                    else if ( computermove === 'paper'){
                        result = 'You Lose';
                    }
                    else if ( computermove === 'scissors'){
                        result = 'You Win';
                    }
                }

                else if(playerMove === 'paper'){
                    if (computermove === 'rock'){
                        result = 'You Win';
                    }
                    else if ( computermove === 'paper'){
                        result = 'Tie';
                    }
                    else if ( computermove === 'scissors'){
                        result = 'You Lose';
                    }
                }

                if (result === 'You Win'){
                    score.wins++;
                }
                else if (result === 'Tie'){
                    score.ties++;
                }
                else if (result === 'You Lose'){
                    score.losses++;
                }

                localStorage.setItem('score',JSON.stringify(score));
                updateScoreElement();

                document.querySelector('.js-result')
                    .innerHTML = result;

                document.querySelector('.js-moves')
                    .innerHTML = `            You
            <img src="image/${playerMove}-emoji.png"
            class="move-icon">
            <img src="image/${computermove}-emoji.png"
            class="move-icon">
            Computer`;
            }

            function updateScoreElement(){
                document.querySelector('.js-score')
                .innerHTML =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            }

            function pickComputerMove(){
                let computermove = '';
                const randomNumber = Math.random();
            
                if( randomNumber >= 0 && randomNumber < 1/3){
                    computermove = 'rock';
                }
                else if ( randomNumber > 1/3 && randomNumber < 2/3){
                    computermove = 'paper';
                }
                else{
                    computermove = 'scissors';
                }
                return computermove;
            }
