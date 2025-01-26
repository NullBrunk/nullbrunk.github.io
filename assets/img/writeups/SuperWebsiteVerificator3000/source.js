    <script>
    document.getElementById('checkup-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const resultsDiv = document.getElementById('results');

      $.ajax({
        url: '/api/check',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(data) {
          let statusBanner = `<div class="status-banner ${data.online ? 'status-online' : 'status-offline'}">
                                ${data.online ? 'The site is online' : 'The site is offline'}
                              </div>`;
            let resultsTable = document.createElement('div');
            if (data.online) {
            let table = document.createElement('table');
            table.className = 'table table-striped';

            let fetchTimeRow = document.createElement('tr');
            let fetchTimeHeader = document.createElement('th');
            fetchTimeHeader.innerText = 'Fetch Time';
            let fetchTimeData = document.createElement('td');
            fetchTimeData.innerText = data.fetch_time;
            fetchTimeRow.appendChild(fetchTimeHeader);
            fetchTimeRow.appendChild(fetchTimeData);
            table.appendChild(fetchTimeRow);

            let seoMetaTagsRow = document.createElement('tr');
            let seoMetaTagsHeader = document.createElement('th');
            seoMetaTagsHeader.innerText = 'SEO Meta Tags Present';
            let seoMetaTagsData = document.createElement('td');
            seoMetaTagsData.innerHTML = data.seo_meta_tags ? '<i class="fas fa-check text-success"></i>' : '<i class="fas fa-times text-danger"></i>';
            seoMetaTagsRow.appendChild(seoMetaTagsHeader);
            seoMetaTagsRow.appendChild(seoMetaTagsData);
            table.appendChild(seoMetaTagsRow);

            if (data.body) {
              let bodyRow = document.createElement('tr');
              let bodyHeader = document.createElement('th');
              bodyHeader.innerText = 'Body';
              let bodyData = document.createElement('td');
              let pre = document.createElement('pre');
              pre.innerText = data.body;
              bodyData.appendChild(pre);
              bodyRow.appendChild(bodyHeader);
              bodyRow.appendChild(bodyData);
              table.appendChild(bodyRow);
            }

            let resultsHeader = document.createElement('h3');
            resultsHeader.innerText = 'Results';
            resultsTable.appendChild(resultsHeader);
            resultsTable.appendChild(table);
            }

            resultsDiv.innerHTML = statusBanner;
            resultsDiv.appendChild(resultsTable);
        },
        error: function(error) {
          console.error(error);
          resultsDiv.innerHTML = '<p class="text-danger">Error: ' + error.responseJSON.message + '</p>';
        }
      });
    });
  </script>
