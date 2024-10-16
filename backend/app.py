from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# In-memory storage for jobs (can be replaced with database)
jobs = []

# Route to post a new job
@app.route('/post-job', methods=['POST'])
def post_job():
    try:
        job_data = request.json
        jobs.append(job_data)  
        return jsonify({'success': True, 'message': 'Job posted successfully!', 'newJob': job_data})
    except Exception as e:
        return jsonify({'success': False, 'message': 'Error posting job', 'error': str(e)}), 500

# Route to get all jobs
@app.route('/get-jobs', methods=['GET'])
def get_jobs():
    try:
        return jsonify({'success': True, 'jobs': jobs})
    except Exception as e:
        return jsonify({'success': False, 'message': 'Error fetching jobs', 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
