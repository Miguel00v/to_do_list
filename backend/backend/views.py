from django.views.generic import View
from django.http import HttpResponse
import os
from django.conf import settings

class ReactAppView(View):
    def get(self, request, *args, **kwargs):
        # Get url name and use it or use a default index.html
        file_name = kwargs.get('file_name', 'index.html')  # Default para index.html
        
        try:
            # Path for React (index.html)
            react_file_path = os.path.join(settings.BASE_DIR, 'frontend', 'build', file_name)

            # Check if file exists
            if not os.path.exists(react_file_path):
                return HttpResponse(f"Error 404: File {file_name} was not found.", status=404)

            # Open and read file HTML
            with open(react_file_path, 'r') as file:
                return HttpResponse(file.read())

        except FileNotFoundError:
            return HttpResponse("Error 404! File was not found.", status=404)