/*Dropdown Menu*/
var speakers = ['speaker1', 'speaker2'];
var sepakers_map = {'speaker1': 'amanda', 'speaker2': 'trump'}
var emotions = ['angry', 'surprise', 'sad', 'happy'];
var sent_ids = [1,2];
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
		                <td></td> \
	            	</tr>';

	speakers.forEach(function (spk){
	cloning_table_html += '\
		<tr> \
		    <td><b>' + spk + '</b></td> \
		    <td>Baseline</td> \
		    <td>EM</td> \
		    <td>EM + SEA</td> \
		 </tr>';
	sent_ids.forEach(function(s, index) {
	    cloning_table_html += '<tr>';
	    if (index == 0) {
	    	cloning_table_html +='<td><audio controls=""><source src="resources/audio/additional_speakers/' + sepakers_map[spk] + '/ref.wav"></audio></td>'	
	    } else {
	    	cloning_table_html +='<td></td>';
	    }
	    cloning_table_html +='\
		    <td><audio controls=""><source src="resources/audio/additional_speakers/' + sepakers_map[spk] + '/baseline' + s + '.wav"></audio></td> \
		    <td><audio controls=""><source src="resources/audio/additional_speakers/' + sepakers_map[spk] + '/' + e + '/EM' + s + '.wav"></audio></td> \
		    <td><audio controls=""><source src="resources/audio/additional_speakers/' + sepakers_map[spk] + '/' + e + '/EM+SEA' + s + '.wav"></audio></td> \
			</tr>';
	    });
	    	
	    cloning_table_html += '<tr><td><br></td></tr>';
	});
	                        
	cloning_table_html += '</tbody></table>';
	all_tables += cloning_table_html

})




$('.additional_samples').html('<div>' + all_tables + '</div>');
