<h1>Executive Summary: Addressing Intermittent File Processing Failures</h1>

This document details a recurring issue within our application infrastructure that results in intermittent failures during file processing, specifically when renaming or moving temporary files. The error manifests as "No such file or directory @ rb_file_s_rename," indicating that the system attempts to operate on a file that does not exist at the expected location. This issue has been observed to impact all IVC CHAMPVA and SIMPLE FORMS form submissions leading to some HTML 500 errors after the user clicks on the submit button. While this impacts only 1-2% of submissions, a complete solution is required to ensure system stability and prevent future occurrences.

<h2>Problem Description:</h2>

The core issue is a race condition related to file system operations. A race condition occurs when multiple processes or threads access and manipulate shared resources (in this case, files within the temporary directory) concurrently, and the final outcome depends on the unpredictable order in which these operations execute.

In our specific scenario, the following sequence of events typically leads to the error:

File Creation: A process begins writing data to a temporary file within the system's temporary directory (tmp/).
File Operation (Rename/Move): Before the first process has fully completed writing to the file, another process attempts to rename or move this file to its final destination.
Error: Because the file is not yet fully written or its creation is not yet fully committed to the file system, the rename/move operation fails with the "No such file or directory" error.
This problem is exacerbated by the following factors:

Asynchronous Operations: Our application utilizes asynchronous processes and background jobs to handle certain file operations. This introduces concurrency and increases the likelihood of race conditions.
Multi-threaded Environment: Our production environment uses a multi-threaded web server (e.g., Puma), allowing multiple requests to be processed concurrently. This further increases the chance of multiple processes accessing the same temporary files simultaneously.
File System Latency: While generally fast, file system operations can experience brief delays, especially under heavy load. These delays can be sufficient to trigger race conditions if proper synchronization mechanisms are not in place.

<h2> Impact: </h2>

The intermittent nature of this issue makes it challenging to reproduce consistently, but its impact can be significant:

User Experience Degradation: Users may experience failed uploads, incomplete reports, or other errors related to file processing, leading to frustration and a negative perception of the application.
Data Integrity Concerns: In some cases, incomplete files might be partially processed, leading to data inconsistencies or corruption.
Increased Support Costs: Troubleshooting and resolving these issues consume valuable engineering and support resources.
Business Disruption: If critical business processes rely on file processing, these failures can lead to delays and disruptions.
Temporary Workarounds:

Currently, when this error occurs, manual intervention is required:

Database Correction: In some cases, database records associated with the failed file operations need to be manually corrected.
Manual File Cleanup: The affected temporary files need to be manually deleted from the server.
These workarounds are time-consuming, error-prone, and unsustainable in the long term.

<h2> Proposed Solution: Implementing Robust File Handling and Retry Mechanisms </h2>

To address the root cause of the problem and prevent future occurrences, we propose implementing the following solutions:

Ensure File Completion: The most critical step is to ensure that a file is fully written to disk before any subsequent operations (rename/move) are attempted. This can be achieved by:

Explicitly closing file handles: After writing to a file, the file handle must be explicitly closed using file.close to ensure that all buffered data is flushed to the file system.
Checking for process completion: If external processes are used to manipulate files, we must wait for these processes to complete successfully before proceeding.
Atomic File Operations: Where possible, we should use atomic file operations (operations that are guaranteed to complete fully or not at all). This prevents partial file operations that can lead to inconsistencies.

Retry Mechanism with Exponential Backoff: In cases where absolute atomicity is not possible, we will implement a retry mechanism with exponential backoff. This means that if a file operation fails due to a "file not found" error, the system will retry the operation after a short delay. If the retry also fails, the delay will be increased exponentially (e.g., 100ms, 200ms, 400ms, etc.), up to a maximum delay. This gives the file system time to complete the file creation process and minimizes the impact of transient delays.

Unique Temporary File Names: Using unique temporary file names (e.g., generated using UUIDs) will further reduce the risk of collisions between concurrent processes.

Technical Implementation Details:

The implementation will involve modifications to the Ruby code responsible for file processing. Specifically, we will:

Refactor the create_tempfile method to ensure file flushing and closing.
Implement a retry_with_backoff function to handle file operations that might fail due to race conditions.
Integrate this retry mechanism into the relevant file processing workflows.
Conclusion:

By implementing these changes, we will significantly improve the reliability and robustness of our file processing infrastructure, eliminating the recurring "No such file or directory" errors and their associated negative impacts. This will result in a better user experience, improved data integrity, reduced support costs, and greater business stability. We recommend prioritizing this work to prevent further disruptions and ensure the long-term health of our application.
