# kubernet_sample
Deployment in Kubernetes


Deploy a sample project which have a nodejs microservice and mongodb for database in local environment with minikube through virtual machine:
1.	Install Virtual Machine
2.	Install kubectl and minikube 
3.	Install skaffold
4.	start the minikube:
> minikube start
5.	clone the sample project:
> git clone http://cloud.nucore.in:8082/git/charan.raj/nucore.git
6.	change the project directory:
> cd project
7.	Run the kubernet through skaffold command line tool:
> skaffold dev -f skaffold/skaffold.yaml
8.	Open one more terminal and run the following command to see the kubernet dashboard
> minikube dashboard
9.	To view the particular services run the following command:
> minikube service node-micro
[ In "node-micro" swagger is implemented you can and that swagger api documentation can be accessed by routing to <servce_url>/docs ]
Note: If your system supports kubernet then there is no need to run the minikube. Step 4, 8, and 9 are not required. To view the dashboard:
i.	run command: kubectl proxy
ii.	hit the following URL: localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/
  
