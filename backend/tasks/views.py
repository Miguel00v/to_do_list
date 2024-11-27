from rest_framework import APIView, Response, status
from .models import Task
from .serializers import TaskSerializer

# Create your views here.
class TaskListView(APIView):
    def get(self, request): # Method Get
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)
    
    def post(self, request): # Method Post
        serializer = TaskSerializer(data=request.data) # Create a new serializer
        if serializer.is_valid(): # Validate data
            serializer.save() # Save date
            return Response(serializer.data, status=status.HTTP_201_CREATED) # Response data created on data base
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) # Response error