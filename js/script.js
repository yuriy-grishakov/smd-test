//  background page

var width = bgAnimation.width = 2200;
var height = bgAnimation.height = 1300;
var letters = Array(256).join(1).split('');

var draw = function () {
bgAnimation.getContext('2d').fillStyle='rgba(0,0,0,.05)';
bgAnimation.getContext('2d').fillRect(0,0,width,height);
bgAnimation.getContext('2d').fillStyle='rgba(148, 146, 146,' + ( Math.random() * 5 + 0.80 ) + ')';;
letters.map(function(y_pos, index){ text = String.fromCharCode(65+Math.random()*33);
x_pos = index * 10;
bgAnimation.getContext('2d').fillText(text, x_pos, y_pos); letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
});
}; setInterval(draw, 50);
function color_random(){ bgAnimation.getContext('2d').fillStyl = 'red';
}



//  animation text 
function printText( el ){

	let letterTimeout = 20

	let text = el.innerHTML
	let i = 1

	let print__fn = function(){

			if( i <= text.length ){
				el.innerHTML = text.substr( 0, i );
				setTimeout( arguments.callee, letterTimeout );
			}

			i++;
		}

	print__fn() // init
};

// init
let el = document.getElementById( 'text-start' )
printText( el );
 
