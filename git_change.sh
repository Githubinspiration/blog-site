git filter-branch --commit-filter '
        if [ "$GIT_COMMITTER_NAME" = "Parth Desai" ];
        then
                GIT_COMMITTER_NAME="devally0412";
                GIT_AUTHOR_NAME="devally0412";
                GIT_COMMITTER_EMAIL="zangming0412@gmail.com";
                GIT_AUTHOR_EMAIL="zangming0412@gmail.com";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD