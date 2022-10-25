/*Dropdown Menu*/
var speakers = ['F0015', 'M0014', 'F0016', 'M0020'];
var emotions = ['angry', 'surprise', 'sad', 'happy'];
var sent_ids = [3,7];
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
		                <td></td> \
	            	</tr>';

	speakers.forEach(function (spk){
	cloning_table_html += '\
		<tr> \
		    <td><b>' + spk + '</b></td> \
		    <td>Baseline</td> \
		    <td>EM</td> \
		    <td>EM + SEA</td> \
		    <td>GST</td> \
		 </tr>';
	sent_ids.forEach(function(s, index) {
	    cloning_table_html += '<tr>';
	    if (index == 0) {
	    	cloning_table_html +='<td><audio controls=""><source src="resources/audio/ref/' + spk + '.wav"></audio></td>'	
	    } else {
	    	cloning_table_html +='<td></td>';
	    }
	    cloning_table_html +='\
		    <td><audio controls=""><source src="resources/audio/no_modification/' + s + '/' + spk + '_' + s + '.wav"></audio></td> \
		    <td><audio controls=""><source src="resources/audio/method1/'+ e +  '/' + s + '/' + spk + '_' + s + '.wav"></audio></td> \
		    <td><audio controls=""><source src="resources/audio/method3/'+ e +  '/' + s + '/' + spk + '_' + s + '.wav"></audio></td> \
		    <td><audio controls=""><source src="resources/audio/gst/'+e +  '/' + s + '/' + spk + '_' + s + '.wav"></audio></td> \
			</tr>';
	    });
	    	
	    cloning_table_html += '<tr><td><br></td></tr>';
	});
	                        
	cloning_table_html += '</tbody></table>';
	all_tables += cloning_table_html

})




$('.main_samples').html('<div>' + all_tables + '</div>');
