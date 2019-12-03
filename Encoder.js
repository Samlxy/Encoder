    // receieves inputs and normalizes #1
function secretMessage() {
				let originalTexts = document.getElementById("original-texts").value;
				let lowerTexts = originalTexts.toLowerCase();
				let jointTexts = lowerTexts.replace(/[^\w]|_/g,"");
				document.getElementById("output").innerHTML = jointTexts;
				splitText(jointTexts);
			}

      // resolves column and row values in an array
	function getColumnAndRow(arraySize) {
				const squareRoot = Math.sqrt(arraySize);
				const column = Math.ceil(squareRoot);
				const row = resolve(squareRoot);

					return [column, row];
			}

      			function resolve(squareRoot) {
				return squareRoot - Math.floor(squareRoot) > 0.5 ? Math.ceil(squareRoot) : Math.floor(squareRoot);
			}

			const newArray = [];

			let newString = "";

			// Split texts into rows and columns #2
			function splitText(text) {
 			 	const [column, row] = getColumnAndRow(text.length);
	  			for (let i = 0; i <= row; i += 1) {
					newArray.push(text.substr(column * i, column));
	    				document.getElementById("output2").innerHTML += text.substr(column * i, column) + '<br>';	
	  			}
        // displays chunked texts by column size #3
				for (let i = 0; i < newArray.length; i++) {
					newString += i > 0 ? ' ' : '';
				    	for (let j = 0; j < row; j++) {
						const string = newArray[j] && newArray[j][i] ? newArray[j][i] : ' ';    
						newString += string;
					}
				}
				
				document.getElementById("output3").innerHTML = newString;
			}

      // displays chunked texts stacked #4
      const chunkTexts = newString;
      const stackTest = 
      document.getElementById("output4").innerHTML = newString + '\n';
      
        
			

