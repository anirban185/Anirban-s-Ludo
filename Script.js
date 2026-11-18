const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

function drawCell(posX, posY) {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.strokeRect(posX , posY, 40, 40);
}

function drawColorBlock(posX, posY, color) {
    ctx.fillStyle = color;
    ctx.fillRect(posX, posY, 40, 40)
}

function drawHomeBlock(posX, posY, color) {
    // Y 1
    if (posY == 1 * 40 && posX == 1 * 40) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(posX + 40, posY + 40, 20, 0, Math.PI * 2);
        ctx.fill();
    } else if (posY == 1 * 40 && posX == 3 * 40) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(posX + 40, posY + 40, 20, 0, Math.PI * 2);
        ctx.fill();
    } else if (posY == 1 * 40 && posX == 10 * 40) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(posX + 40, posY + 40, 20, 0, Math.PI * 2);
        ctx.fill();
    } else if (posY == 1 * 40 && posX == 12 * 40) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(posX + 40, posY + 40, 20, 0, Math.PI * 2);
        ctx.fill();
    }

    // Y 3
    if (posY == 3 * 40 && posX == 1 * 40) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(posX + 40, posY + 40, 20, 0, Math.PI * 2);
        ctx.fill();
    } else if (posY == 3 * 40 && posX == 3 * 40) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(posX + 40, posY + 40, 20, 0, Math.PI * 2);
        ctx.fill();
    } else if (posY == 3 * 40 && posX == 10 * 40) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(posX + 40, posY + 40, 20, 0, Math.PI * 2);
        ctx.fill();
    } else if (posY == 3 * 40 && posX == 12 * 40) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(posX + 40, posY + 40, 20, 0, Math.PI * 2);
        ctx.fill();
    }

    // Y 10
    if (posY == 10 * 40 && posX == 1 * 40) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(posX + 40, posY + 40, 20, 0, Math.PI * 2);
        ctx.fill();
    } else if (posY == 10 * 40 && posX == 3 * 40) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(posX + 40, posY + 40, 20, 0, Math.PI * 2);
        ctx.fill();
    } else if (posY == 10 * 40 && posX == 10 * 40) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(posX + 40, posY + 40, 20, 0, Math.PI * 2);
        ctx.fill();
    } else if (posY == 10 * 40 && posX == 12 * 40) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(posX + 40, posY + 40, 20, 0, Math.PI * 2);
        ctx.fill();
    }

    // Y 12
    if (posY == 12 * 40 && posX == 1 * 40) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(posX + 40, posY + 40, 20, 0, Math.PI * 2);
        ctx.fill();
    } else if (posY == 12 * 40 && posX == 3 * 40) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(posX + 40, posY + 40, 20, 0, Math.PI * 2);
        ctx.fill();
    } else if (posY == 12 * 40 && posX == 10 * 40) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(posX + 40, posY + 40, 20, 0, Math.PI * 2);
        ctx.fill();
    } else if (posY == 12 * 40 && posX == 12 * 40) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(posX + 40, posY + 40, 20, 0, Math.PI * 2);
        ctx.fill();
    }
}

window.addEventListener('load', function () {
    for (var i = 0; i < 600; i += 40) {
        for (var j = 0; j < 600; j += 40) {
            // Y 0
            if (i == 0 && j >= 0 && j < 6 * 40) {
                drawColorBlock(j, i, 'red');
            } else if (i == 0 && j >= 7 && j < 9 * 40) {
                drawCell(j, i);
            } else if (i == 0) {
                drawColorBlock(j, i, 'green');
            }

            // Y 1
            if (i == 1 * 40 && j == 0) {
                drawColorBlock(j, i, 'red');
            } else if (i == 1 * 40 && j > 0 && j < 5 * 40) {
                drawHomeBlock(j, i);
            } else if (i == 1 * 40 && j == 5 * 40) {
                drawColorBlock(j, i, 'red');
            } else if (i == 1 * 40 && j > 5 * 40 && j < 7 * 40) {
                drawCell(j, i);
            } else if (i == 1 * 40 && j > 6 * 40&& j < 10 * 40) {
                drawColorBlock(j, i, 'green');
            } else if (i == 1 * 40 && j > 11 && j < 14 * 40) {
                drawHomeBlock(j, i, 'green')
            } else if (i == 1 * 40 && j == 14 * 40) {
                drawColorBlock(j, i, 'green')
            }

            // Y 2
            if (i == 2 * 40 && j == 0) {
                drawColorBlock(j, i, 'red');
            } else if (i == 2 * 40 && j > 0 && j < 5 * 40) {
                drawHomeBlock(j, i);
            } else if (i == 2 * 40 && j == 5 * 40) {
                drawColorBlock(j, i, 'red');
            } else if (i == 2 * 40 && j > 5 * 40 && j < 7 * 40) {
                drawCell(j, i);
            } else if (i == 2 * 40 && j == 7 * 40) {
                drawColorBlock(j, i, 'green');
            } else if (i == 2 * 40 && j == 8 * 40) {
                drawCell(j, i);
            } else if (i == 2 * 40 && j == 9 * 40) {
                drawColorBlock(j, i, 'green');
            } else if (i == 2 * 40 && j > 9 * 40 && j < 14 * 40) {
                drawHomeBlock(j, i, 'green');
            } else if (i == 2 * 40 && j == 14 * 40) {
                drawColorBlock(j, i, 'green');
            }

            // Y 3
            if (i == 3 * 40 && j == 0) {
                drawColorBlock(j, i, 'red');
            } else if (i == 3 * 40 && j > 0 && j < 5 * 40) {
                drawHomeBlock(j, i);
            } else if (i == 3 * 40 && j == 5 * 40) {
                drawColorBlock(j, i, 'red');
            } else if (i == 3 * 40 && j > 5 * 40 && j < 7 * 40) {
                drawCell(j, i);
            } else if (i == 3 * 40 && j == 7 * 40) {
                drawColorBlock(j, i, 'green');
            } else if (i == 3 * 40 && j == 8 * 40) {
                drawCell(j, i);
            } else if (i == 3 * 40 && j == 9 * 40) {
                drawColorBlock(j, i, 'green');
            } else if (i == 3 * 40 && j > 9 * 40 && j < 14 * 40) {
                drawHomeBlock(j, i, 'green');
            } else if (i == 3 * 40 && j == 14 * 40) {
                drawColorBlock(j, i, 'green');
            }

            // Y 4
            if (i == 4 * 40 && j == 0) {
                drawColorBlock(j, i, 'red');
            } else if (i == 4 * 40 && j > 0 && j < 5 * 40) {
                drawHomeBlock(j, i);
            } else if (i == 4 * 40 && j == 5 * 40) {
                drawColorBlock(j, i, 'red');
            } else if (i == 4 * 40 && j > 5 * 40 && j < 7 * 40) {
                drawCell(j, i);
            } else if (i == 4 * 40 && j == 7 * 40) {
                drawColorBlock(j, i, 'green');
            } else if (i == 4 * 40 && j == 8 * 40) {
                drawCell(j, i);
            } else if (i == 4 * 40 && j == 9 * 40) {
                drawColorBlock(j, i, 'green');
            } else if (i == 4 * 40 && j > 9 * 40 && j < 14 * 40) {
                drawHomeBlock(j, i, 'green');
            } else if (i == 4 * 40 && j == 14 * 40) {
                drawColorBlock(j, i, 'green');
            }

            // Y 5
            if (i == 5 * 40 && j < 6 * 40) {
                drawColorBlock(j, i, 'red');
            } else if (i == 5 * 40 && j > 5 * 40 && j < 7 * 40) {
                drawCell(j, i);
            } else if (i == 5 * 40 && j == 7 * 40) {
                drawColorBlock(j, i, 'green');
            } else if (i == 5 * 40 && j == 8 * 40) {
                drawCell(j, i);
            } else if (i == 5 * 40 && j > 7 * 40) {
                drawColorBlock(j, i, 'green');
            }

            // Y 6
            if (i == 6 * 40 && j < 1 * 40) {
                drawCell(j, i);
            } else if (i == 6 * 40 && j == 1 * 40) {
                drawColorBlock(j, i, 'red');
            } else if (i == 6 * 40 && j > 5 * 40 && j < 9 * 40) {
                drawColorBlock(j, i, 'gray');
            } else if (i == 6 * 40 && j > 1 * 40 && j < 6 * 40) {
                drawCell(j, i);
            } else if (i == 6 * 40 && j == 7 * 40) {
                drawColorBlock(j, i, 'green');
            } else if (i == 6 * 40 && j > 8 * 40) {
                drawCell(j, i);
            }

            // Y 7
            if (i == 7 * 40 && j < 1 * 40) {
                drawCell(j, i);
            } else if (i == 7 * 40 && j < 6 * 40) {
                drawColorBlock(j, i, 'red');
            } else if (i == 7 * 40 && j > 1 * 40 && j < 6 * 40) {
                drawCell(j, i);
            } else if (i == 7 * 40 && j > 5 * 40 && j < 9 * 40) {
                drawColorBlock(j, i, 'gray');
            } else if (i == 7 * 40 && j > 8 * 40 && j < 14 * 40) {
                drawColorBlock(j, i, 'yellow')
            } else if (i == 7 * 40 && j == 14 * 40) {
                drawCell(j, i);
            }

            // Y 8
            if (i == 8 * 40 && j < 6 * 40) {
                drawCell(j, i);
            } else if (i == 8 * 40 && j > 5 * 40 && j < 9 * 40) {
                drawColorBlock(j, i, 'gray');
            } else if (i == 8 * 40 && j > 8 * 40 && j < 13 * 40) {
                drawCell(j, i);
            } else if (i == 8 * 40 && j > 8 * 40 && j < 14 * 40) {
                drawColorBlock(j, i, 'yellow')
            } else if (i == 8 * 40 && j == 14 * 40) {
                drawCell(j, i);
            }

            // Y 9
            if (i == 9 * 40 && j < 6 * 40) {
                drawColorBlock(j, i, 'blue');
            } else if (i == 9 * 40 && j > 5 * 40 && j < 7 * 40) {
                drawCell(j, i);
            } else if (i == 9 * 40 && j == 7 * 40) {
                drawColorBlock(j, i, 'blue');
            } else if (i == 9 * 40 && j == 8 * 40) {
                drawCell(j, i);
            } else if (i == 9 * 40 && j > 7 * 40) {
                drawColorBlock(j, i, 'yellow');
            }

            // Y 10
            if (i == 10 * 40 && j == 0) {
                drawColorBlock(j, i, 'blue');
            } else if (i == 10 * 40 && j > 0 && j < 5 * 40) {
                drawHomeBlock(j, i);
            } else if (i == 10 * 40 && j == 5 * 40) {
                drawColorBlock(j, i, 'blue');
            } else if (i == 10 * 40 && j > 5 * 40 && j < 7 * 40) {
                drawCell(j, i);
            } else if (i == 10 * 40 && j == 7 * 40) {
                drawColorBlock(j, i, 'blue');
            } else if (i == 10 * 40 && j == 8 * 40) {
                drawCell(j, i);
            } else if (i == 10 * 40 && j == 9 * 40) {
                drawColorBlock(j, i, 'yellow');
            } else if (i == 10 * 40 && j > 9 * 40 && j < 14 * 40) {
                drawHomeBlock(j, i, 'yellow');
            } else if (i == 10 * 40 && j == 14 * 40) {
                drawColorBlock(j, i, 'yellow');
            }

            // Y 11
            if (i == 11 * 40 && j == 0) {
                drawColorBlock(j, i, 'blue');
            } else if (i == 11 * 40 && j > 0 && j < 5 * 40) {
                drawHomeBlock(j, i);
            } else if (i == 11 * 40 && j == 5 * 40) {
                drawColorBlock(j, i, 'blue');
            } else if (i == 11 * 40 && j > 5 * 40 && j < 7 * 40) {
                drawCell(j, i);
            } else if (i == 11 * 40 && j == 7 * 40) {
                drawColorBlock(j, i, 'blue');
            } else if (i == 11 * 40 && j == 8 * 40) {
                drawCell(j, i);
            } else if (i == 11 * 40 && j == 9 * 40) {
                drawColorBlock(j, i, 'yellow');
            } else if (i == 11 * 40 && j > 9 * 40 && j < 14 * 40) {
                drawHomeBlock(j, i, 'yellow');
            } else if (i == 11 * 40 && j == 14 * 40) {
                drawColorBlock(j, i, 'yellow');
            }

            // Y 12
            if (i == 12 * 40 && j == 0) {
                drawColorBlock(j, i, 'blue');
            } else if (i == 12 * 40 && j > 0 && j < 5 * 40) {
                drawHomeBlock(j, i);
            } else if (i == 12 * 40 && j == 5 * 40) {
                drawColorBlock(j, i, 'blue');
            } else if (i == 12 * 40 && j > 5 * 40 && j < 7 * 40) {
                drawCell(j, i);
            } else if (i == 12 * 40 && j == 7 * 40) {
                drawColorBlock(j, i, 'blue');
            } else if (i == 12 * 40 && j == 8 * 40) {
                drawCell(j, i);
            } else if (i == 12 * 40 && j == 9 * 40) {
                drawColorBlock(j, i, 'yellow');
            } else if (i == 12 * 40 && j > 9 * 40 && j < 14 * 40) {
                drawHomeBlock(j, i, 'yellow');
            } else if (i == 12 * 40 && j == 14 * 40) {
                drawColorBlock(j, i, 'yellow');
            }

            // Y 13
            if (i == 13 * 40 && j == 0) {
                drawColorBlock(j, i, 'blue');
            } else if (i == 13 * 40 && j > 0 && j < 5 * 40) {
                drawHomeBlock(j, i, 'blue');
            } else if (i == 13 * 40 && j > 4 * 40 && j < 8 * 40) {
                drawColorBlock(j, i, 'blue');
            } else if (i == 13 * 40 && j == 8 * 40) {
                drawCell(j, i);
            } else if (i == 13 * 40 && j == 9 * 40) {
                drawColorBlock(j, i, 'yellow');
            } else if (i == 13 * 40 && j > 9 * 40 && j < 14 * 40) {
                drawHomeBlock(j, i, 'yellow')
            } else if (i == 13 * 40 && j == 14 * 40) {
                drawColorBlock(j, i, 'yellow')
            }

            // Y 14
            if (i == 14 * 40 && j >= 0 && j < 6 * 40) {
                drawColorBlock(j, i, 'blue');
            } else if (i == 14 * 40 && j >= 7 && j < 9 * 40) {
                drawCell(j, i);
            } else if (i == 14 * 40) {
                drawColorBlock(j, i, 'yellow');
            }


        }
    }
})