/*Dropdown Menu*/
var speakers = ['p229', 'p232', 'p233', 'p243'];
// var sepakers_map = {'speaker1': 'amanda', 'speaker2': 'trump'}
var emotions = ['angry', 'surprise', 'sad', 'happy'];
var sent_ids = [3,6];
var all_tables = ''
emotions.forEach(function(e){
	var cloning_table_html = ' \
			<h2>' + e.charAt(0).toUpperCase() + e.slice(1) + '</h2>\
		    <table class="wrapper smaller_audio"> \
	            <tbody style="margin-right: auto; text-align: center;"> \
	            	<tr> \
		                <td style="text-align: left;"></td> \
		                <td></td> \
		                <td></td> \
	            	</tr>';

	speakers.forEach(function (spk){
	cloning_table_html += '\
		<tr> \
		    <td><b>' + spk + '</b></td> \
		    <td>Baseline</td> \
		    <td>EM</td> \
		 </tr>';
	sent_ids.forEach(function(s, index) {
	    cloning_table_html += '<tr>';
	    if (index == 0) {
	    	cloning_table_html +='<td><audio controls=""><source src="resources/audio/vctk_results/ref/' +spk + '.wav"></audio></td>'	
	    } else {
	    	cloning_table_html +='<td></td>';
	    }
	    cloning_table_html +='\
		    <td><audio controls=""><source src="resources/audio/vctk_results/no_modification/' + spk + '_' + s + '.wav"></audio></td> \
		    <td><audio controls=""><source src="resources/audio/vctk_results/' + e + '/' + spk + '_' + s + '.wav"></audio></td> \
			</tr>';
	    });
	    	
	    cloning_table_html += '<tr><td><br></td></tr>';
	});
	                        
	cloning_table_html += '</tbody></table>';
	all_tables += cloning_table_html

})




$('.additional_samples').html('<div>' + all_tables + '</div>');
